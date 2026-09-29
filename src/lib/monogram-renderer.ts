/** A textured relief of the supplied artwork. No replacement logo or model is used. */
export function createMonogramRenderer(canvas: HTMLCanvasElement, ready: () => void) {
  const gl = canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false });
  if (!gl) return null;
  const vertex = `
    precision mediump float;
    attribute vec2 uv; varying vec2 texcoord;
    uniform sampler2D artwork; uniform vec3 rotation;
    uniform float aspect; uniform float layer;
    void main() {
      texcoord = vec2(.30 + uv.x * .70, uv.y);
      float relief = sin(uv.x * 3.14159) * .035;
      vec3 p = vec3((uv.x-.5)*2.6, (uv.y-.5)*2.08, relief + layer);
      float cx=cos(rotation.x), sx=sin(rotation.x), cy=cos(rotation.y), sy=sin(rotation.y);
      float cz=cos(rotation.z), sz=sin(rotation.z);
      p = vec3(p.x, p.y*cx-p.z*sx, p.y*sx+p.z*cx);
      p = vec3(p.x*cy+p.z*sy, p.y, -p.x*sy+p.z*cy);
      p.xy = vec2(p.x*cz-p.y*sz, p.x*sz+p.y*cz);
      gl_Position = vec4(p.x*2.28/aspect, p.y*2.28, 0., 3.-p.z);
    }`;
  const fragment = `
    precision mediump float; varying vec2 texcoord;
    uniform sampler2D artwork; uniform float layer;
    void main() {
      vec4 c = texture2D(artwork, texcoord);
      float value = max(c.r, max(c.g, c.b));
      float alpha = smoothstep(.018, .065, value) * smoothstep(.065, .13, texcoord.y);
      if(alpha < .01) discard;
      float shade = layer < -.001 ? .34 : 1.;
      gl_FragColor = vec4(c.rgb * shade, alpha);
    }`;
  const shaders: WebGLShader[] = [];
  function compile(type: number, source: string) {
    const shader = gl!.createShader(type)!;
    gl!.shaderSource(shader, source); gl!.compileShader(shader);
    if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) { console.warn("Mavron shader:",gl!.getShaderInfoLog(shader));gl!.deleteShader(shader); return null; }
    shaders.push(shader); return shader;
  }
  const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
  if (!vs || !fs) { shaders.forEach(s => gl.deleteShader(s)); return null; }
  const program = gl.createProgram()!;
  gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { console.warn("Mavron shader link:",gl.getProgramInfoLog(program));gl.deleteProgram(program); shaders.forEach(s=>gl.deleteShader(s)); return null; }
  gl.useProgram(program);
  const vertices: number[] = [], segments = 120;
  for (let y=0;y<segments;y++) for(let x=0;x<segments;x++) {
    const a=x/segments,b=y/segments,c=(x+1)/segments,d=(y+1)/segments;
    vertices.push(a,b,c,b,a,d,a,d,c,b,c,d);
  }
  const buffer=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  const uv=gl.getAttribLocation(program,"uv"); gl.enableVertexAttribArray(uv);
  gl.vertexAttribPointer(uv,2,gl.FLOAT,false,0,0);
  const texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  const angle=gl.getUniformLocation(program,"rotation"), aspect=gl.getUniformLocation(program,"aspect"), layer=gl.getUniformLocation(program,"layer");
  gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0,0,0,0);
  let loaded=false, disposed=false;
  const img=new Image();
  img.onload=()=> {
    if(disposed) return;
    gl.bindTexture(gl.TEXTURE_2D,texture); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
    loaded=true; ready();
  };
  img.src="/images/mavron-original.png";
  return {
    render(x:number,y:number,z:number) {
      if(!loaded||disposed||gl.isContextLost()) return;
      const ratio=Math.min(window.devicePixelRatio||1,1.5);
      const w=Math.round(canvas.clientWidth*ratio),h=Math.round(canvas.clientHeight*ratio);
      if(canvas.width!==w||canvas.height!==h) {canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}
      gl.clear(gl.COLOR_BUFFER_BIT); gl.uniform1f(aspect,w/h); gl.uniform3f(angle,x,y,z);
      // Thin repeated silhouettes give the photograph volume while preserving its face.
      for(let i=8;i>=0;i--) {gl.uniform1f(layer,-i*.012);gl.drawArrays(gl.TRIANGLES,0,vertices.length/2);}
    },
    dispose() {disposed=true;img.onload=null;gl.deleteBuffer(buffer);gl.deleteTexture(texture);gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s));}
  };
}
