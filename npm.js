var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/js-untar/build/dist/untar.js
var require_untar = __commonJS({
  "node_modules/js-untar/build/dist/untar.js"(exports, module) {
    !function(e, r) {
      "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? module.exports = r() : e.untar = r();
    }(exports, function() {
      "use strict";
      function e(e2) {
        function r2(e3) {
          for (var r3 = 0, n3 = t2.length; r3 < n3; ++r3) t2[r3](e3);
          a2.push(e3);
        }
        __name(r2, "r");
        if ("function" != typeof Promise) throw new Error("Promise implementation not available in this environment.");
        var t2 = [], a2 = [], n2 = new Promise(function(t3, a3) {
          e2(t3, a3, r2);
        });
        n2.progress = function(e3) {
          if ("function" != typeof e3) throw new Error("cb is not a function.");
          for (var r3 = 0, i3 = a2.length; r3 < i3; ++r3) e3(a2[r3]);
          return t2.push(e3), n2;
        };
        var i2 = n2.then;
        return n2.then = function(e3, r3, t3) {
          return i2.call(n2, e3, r3), void 0 !== t3 && n2.progress(t3), n2;
        }, n2;
      }
      __name(e, "e");
      function r(r2) {
        if (!(r2 instanceof ArrayBuffer)) throw new TypeError("arrayBuffer is not an instance of ArrayBuffer.");
        if (!n.Worker) throw new Error("Worker implementation is not available in this environment.");
        return new e(function(e2, n2, i2) {
          var o2 = new Worker(a), s = [];
          o2.onerror = function(e3) {
            n2(e3);
          }, o2.onmessage = function(r3) {
            switch (r3 = r3.data, r3.type) {
              case "log":
                console[r3.data.level]("Worker: " + r3.data.msg);
                break;
              case "extract":
                var a2 = t(r3.data);
                s.push(a2), i2(a2);
                break;
              case "complete":
                o2.terminate(), e2(s);
                break;
              case "error":
                o2.terminate(), n2(new Error(r3.data.message));
                break;
              default:
                o2.terminate(), n2(new Error("Unknown message from worker: " + r3.type));
            }
          }, o2.postMessage({ type: "extract", buffer: r2 }, [r2]);
        });
      }
      __name(r, "r");
      function t(e2) {
        return Object.defineProperties(e2, o), e2;
      }
      __name(t, "t");
      var a, n = window || this, i = n.URL || n.webkitURL, o = { blob: { get: /* @__PURE__ */ __name(function() {
        return this._blob || (this._blob = new Blob([this.buffer]));
      }, "get") }, getBlobUrl: { value: /* @__PURE__ */ __name(function() {
        return this._blobUrl || (this._blobUrl = i.createObjectURL(this.blob));
      }, "value") }, readAsString: { value: /* @__PURE__ */ __name(function() {
        for (var e2 = this.buffer, r2 = e2.byteLength, t2 = 1, a2 = new DataView(e2), n2 = [], i2 = 0; i2 < r2; ++i2) {
          var o2 = a2.getUint8(i2 * t2, true);
          n2.push(o2);
        }
        return this._string = String.fromCharCode.apply(null, n2);
      }, "value") }, readAsJSON: { value: /* @__PURE__ */ __name(function() {
        return JSON.parse(this.readAsString());
      }, "value") } };
      return a = (window || this).URL.createObjectURL(new Blob(['"use strict";function UntarWorker(){}function decodeUTF8(e){for(var r="",t=0;t<e.length;){var a=e[t++];if(a>127){if(a>191&&a<224){if(t>=e.length)throw"UTF-8 decode: incomplete 2-byte sequence";a=(31&a)<<6|63&e[t]}else if(a>223&&a<240){if(t+1>=e.length)throw"UTF-8 decode: incomplete 3-byte sequence";a=(15&a)<<12|(63&e[t])<<6|63&e[++t]}else{if(!(a>239&&a<248))throw"UTF-8 decode: unknown multibyte start 0x"+a.toString(16)+" at index "+(t-1);if(t+2>=e.length)throw"UTF-8 decode: incomplete 4-byte sequence";a=(7&a)<<18|(63&e[t])<<12|(63&e[++t])<<6|63&e[++t]}++t}if(a<=65535)r+=String.fromCharCode(a);else{if(!(a<=1114111))throw"UTF-8 decode: code point 0x"+a.toString(16)+" exceeds UTF-16 reach";a-=65536,r+=String.fromCharCode(a>>10|55296),r+=String.fromCharCode(1023&a|56320)}}return r}function PaxHeader(e){this._fields=e}function TarFile(){}function UntarStream(e){this._bufferView=new DataView(e),this._position=0}function UntarFileStream(e){this._stream=new UntarStream(e),this._globalPaxHeader=null}if(UntarWorker.prototype={onmessage:function(e){try{if("extract"!==e.data.type)throw new Error("Unknown message type: "+e.data.type);this.untarBuffer(e.data.buffer)}catch(r){this.postError(r)}},postError:function(e){this.postMessage({type:"error",data:{message:e.message}})},postLog:function(e,r){this.postMessage({type:"log",data:{level:e,msg:r}})},untarBuffer:function(e){try{for(var r=new UntarFileStream(e);r.hasNext();){var t=r.next();this.postMessage({type:"extract",data:t},[t.buffer])}this.postMessage({type:"complete"})}catch(a){this.postError(a)}},postMessage:function(e,r){self.postMessage(e,r)}},"undefined"!=typeof self){var worker=new UntarWorker;self.onmessage=function(e){worker.onmessage(e)}}PaxHeader.parse=function(e){for(var r=new Uint8Array(e),t=[];r.length>0;){var a=parseInt(decodeUTF8(r.subarray(0,r.indexOf(32)))),n=decodeUTF8(r.subarray(0,a)),i=n.match(/^\\d+ ([^=]+)=(.*)\\n$/);if(null===i)throw new Error("Invalid PAX header data format.");var s=i[1],o=i[2];0===o.length?o=null:null!==o.match(/^\\d+$/)&&(o=parseInt(o));var f={name:s,value:o};t.push(f),r=r.subarray(a)}return new PaxHeader(t)},PaxHeader.prototype={applyHeader:function(e){this._fields.forEach(function(r){var t=r.name,a=r.value;"path"===t?(t="name",void 0!==e.prefix&&delete e.prefix):"linkpath"===t&&(t="linkname"),null===a?delete e[t]:e[t]=a})}},UntarStream.prototype={readString:function(e){for(var r=1,t=e*r,a=[],n=0;n<e;++n){var i=this._bufferView.getUint8(this.position()+n*r,!0);if(0===i)break;a.push(i)}return this.seek(t),String.fromCharCode.apply(null,a)},readBuffer:function(e){var r;if("function"==typeof ArrayBuffer.prototype.slice)r=this._bufferView.buffer.slice(this.position(),this.position()+e);else{r=new ArrayBuffer(e);var t=new Uint8Array(r),a=new Uint8Array(this._bufferView.buffer,this.position(),e);t.set(a)}return this.seek(e),r},seek:function(e){this._position+=e},peekUint32:function(){return this._bufferView.getUint32(this.position(),!0)},position:function(e){return void 0===e?this._position:void(this._position=e)},size:function(){return this._bufferView.byteLength}},UntarFileStream.prototype={hasNext:function(){return this._stream.position()+4<this._stream.size()&&0!==this._stream.peekUint32()},next:function(){return this._readNextFile()},_readNextFile:function(){var e=this._stream,r=new TarFile,t=!1,a=null,n=e.position(),i=n+512;switch(r.name=e.readString(100),r.mode=e.readString(8),r.uid=parseInt(e.readString(8)),r.gid=parseInt(e.readString(8)),r.size=parseInt(e.readString(12),8),r.mtime=parseInt(e.readString(12),8),r.checksum=parseInt(e.readString(8)),r.type=e.readString(1),r.linkname=e.readString(100),r.ustarFormat=e.readString(6),r.ustarFormat.indexOf("ustar")>-1&&(r.version=e.readString(2),r.uname=e.readString(32),r.gname=e.readString(32),r.devmajor=parseInt(e.readString(8)),r.devminor=parseInt(e.readString(8)),r.namePrefix=e.readString(155),r.namePrefix.length>0&&(r.name=r.namePrefix+"/"+r.name)),e.position(i),r.type){case"0":case"":r.buffer=e.readBuffer(r.size);break;case"1":break;case"2":break;case"3":break;case"4":break;case"5":break;case"6":break;case"7":break;case"g":t=!0,this._globalPaxHeader=PaxHeader.parse(e.readBuffer(r.size));break;case"x":t=!0,a=PaxHeader.parse(e.readBuffer(r.size))}void 0===r.buffer&&(r.buffer=new ArrayBuffer(0));var s=i+r.size;return r.size%512!==0&&(s+=512-r.size%512),e.position(s),t&&(r=this._readNextFile()),null!==this._globalPaxHeader&&this._globalPaxHeader.applyHeader(r),null!==a&&a.applyHeader(r),r}};'])), r;
    });
  }
});

// node_modules/esbuild-wasm/lib/browser.js
var require_browser = __commonJS({
  "node_modules/esbuild-wasm/lib/browser.js"(exports, module) {
    ((module2) => {
      "use strict";
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = /* @__PURE__ */ __name((target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      }, "__export");
      var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      }, "__copyProps");
      var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
      var __async = /* @__PURE__ */ __name((__this, __arguments, generator) => {
        return new Promise((resolve2, reject) => {
          var fulfilled = /* @__PURE__ */ __name((value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }, "fulfilled");
          var rejected = /* @__PURE__ */ __name((value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          }, "rejected");
          var step = /* @__PURE__ */ __name((x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
          step((generator = generator.apply(__this, __arguments)).next());
        });
      }, "__async");
      var browser_exports = {};
      __export2(browser_exports, {
        analyzeMetafile: /* @__PURE__ */ __name(() => analyzeMetafile, "analyzeMetafile"),
        analyzeMetafileSync: /* @__PURE__ */ __name(() => analyzeMetafileSync, "analyzeMetafileSync"),
        build: /* @__PURE__ */ __name(() => build, "build"),
        buildSync: /* @__PURE__ */ __name(() => buildSync, "buildSync"),
        context: /* @__PURE__ */ __name(() => context, "context"),
        default: /* @__PURE__ */ __name(() => browser_default, "default"),
        formatMessages: /* @__PURE__ */ __name(() => formatMessages, "formatMessages"),
        formatMessagesSync: /* @__PURE__ */ __name(() => formatMessagesSync, "formatMessagesSync"),
        initialize: /* @__PURE__ */ __name(() => initialize, "initialize"),
        stop: /* @__PURE__ */ __name(() => stop, "stop"),
        transform: /* @__PURE__ */ __name(() => transform, "transform"),
        transformSync: /* @__PURE__ */ __name(() => transformSync, "transformSync"),
        version: /* @__PURE__ */ __name(() => version, "version")
      });
      module2.exports = __toCommonJS(browser_exports);
      function encodePacket(packet) {
        let visit = /* @__PURE__ */ __name((value) => {
          if (value === null) {
            bb.write8(0);
          } else if (typeof value === "boolean") {
            bb.write8(1);
            bb.write8(+value);
          } else if (typeof value === "number") {
            bb.write8(2);
            bb.write32(value | 0);
          } else if (typeof value === "string") {
            bb.write8(3);
            bb.write(encodeUTF8(value));
          } else if (value instanceof Uint8Array) {
            bb.write8(4);
            bb.write(value);
          } else if (value instanceof Array) {
            bb.write8(5);
            bb.write32(value.length);
            for (let item of value) {
              visit(item);
            }
          } else {
            let keys = Object.keys(value);
            bb.write8(6);
            bb.write32(keys.length);
            for (let key of keys) {
              bb.write(encodeUTF8(key));
              visit(value[key]);
            }
          }
        }, "visit");
        let bb = new ByteBuffer();
        bb.write32(0);
        bb.write32(packet.id << 1 | +!packet.isRequest);
        visit(packet.value);
        writeUInt32LE(bb.buf, bb.len - 4, 0);
        return bb.buf.subarray(0, bb.len);
      }
      __name(encodePacket, "encodePacket");
      function decodePacket(bytes) {
        let visit = /* @__PURE__ */ __name(() => {
          switch (bb.read8()) {
            case 0:
              return null;
            case 1:
              return !!bb.read8();
            case 2:
              return bb.read32();
            case 3:
              return decodeUTF8(bb.read());
            case 4:
              return bb.read();
            case 5: {
              let count = bb.read32();
              let value2 = [];
              for (let i = 0; i < count; i++) {
                value2.push(visit());
              }
              return value2;
            }
            case 6: {
              let count = bb.read32();
              let value2 = {};
              for (let i = 0; i < count; i++) {
                value2[decodeUTF8(bb.read())] = visit();
              }
              return value2;
            }
            default:
              throw new Error("Invalid packet");
          }
        }, "visit");
        let bb = new ByteBuffer(bytes);
        let id = bb.read32();
        let isRequest = (id & 1) === 0;
        id >>>= 1;
        let value = visit();
        if (bb.ptr !== bytes.length) {
          throw new Error("Invalid packet");
        }
        return { id, isRequest, value };
      }
      __name(decodePacket, "decodePacket");
      var ByteBuffer = class {
        static {
          __name(this, "ByteBuffer");
        }
        constructor(buf = new Uint8Array(1024)) {
          this.buf = buf;
          this.len = 0;
          this.ptr = 0;
        }
        _write(delta) {
          if (this.len + delta > this.buf.length) {
            let clone = new Uint8Array((this.len + delta) * 2);
            clone.set(this.buf);
            this.buf = clone;
          }
          this.len += delta;
          return this.len - delta;
        }
        write8(value) {
          let offset = this._write(1);
          this.buf[offset] = value;
        }
        write32(value) {
          let offset = this._write(4);
          writeUInt32LE(this.buf, value, offset);
        }
        write(bytes) {
          let offset = this._write(4 + bytes.length);
          writeUInt32LE(this.buf, bytes.length, offset);
          this.buf.set(bytes, offset + 4);
        }
        _read(delta) {
          if (this.ptr + delta > this.buf.length) {
            throw new Error("Invalid packet");
          }
          this.ptr += delta;
          return this.ptr - delta;
        }
        read8() {
          return this.buf[this._read(1)];
        }
        read32() {
          return readUInt32LE(this.buf, this._read(4));
        }
        read() {
          let length = this.read32();
          let bytes = new Uint8Array(length);
          let ptr = this._read(bytes.length);
          bytes.set(this.buf.subarray(ptr, ptr + length));
          return bytes;
        }
      };
      var encodeUTF8;
      var decodeUTF8;
      var encodeInvariant;
      if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
        let encoder = new TextEncoder();
        let decoder = new TextDecoder();
        encodeUTF8 = /* @__PURE__ */ __name((text) => encoder.encode(text), "encodeUTF8");
        decodeUTF8 = /* @__PURE__ */ __name((bytes) => decoder.decode(bytes), "decodeUTF8");
        encodeInvariant = 'new TextEncoder().encode("")';
      } else if (typeof Buffer !== "undefined") {
        encodeUTF8 = /* @__PURE__ */ __name((text) => Buffer.from(text), "encodeUTF8");
        decodeUTF8 = /* @__PURE__ */ __name((bytes) => {
          let { buffer, byteOffset, byteLength } = bytes;
          return Buffer.from(buffer, byteOffset, byteLength).toString();
        }, "decodeUTF8");
        encodeInvariant = 'Buffer.from("")';
      } else {
        throw new Error("No UTF-8 codec found");
      }
      if (!(encodeUTF8("") instanceof Uint8Array))
        throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
      function readUInt32LE(buffer, offset) {
        return buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24;
      }
      __name(readUInt32LE, "readUInt32LE");
      function writeUInt32LE(buffer, value, offset) {
        buffer[offset++] = value;
        buffer[offset++] = value >> 8;
        buffer[offset++] = value >> 16;
        buffer[offset++] = value >> 24;
      }
      __name(writeUInt32LE, "writeUInt32LE");
      var quote = JSON.stringify;
      var buildLogLevelDefault = "warning";
      var transformLogLevelDefault = "silent";
      function validateTarget(target) {
        validateStringValue(target, "target");
        if (target.indexOf(",") >= 0) throw new Error(`Invalid target: ${target}`);
        return target;
      }
      __name(validateTarget, "validateTarget");
      var canBeAnything = /* @__PURE__ */ __name(() => null, "canBeAnything");
      var mustBeBoolean = /* @__PURE__ */ __name((value) => typeof value === "boolean" ? null : "a boolean", "mustBeBoolean");
      var mustBeString = /* @__PURE__ */ __name((value) => typeof value === "string" ? null : "a string", "mustBeString");
      var mustBeRegExp = /* @__PURE__ */ __name((value) => value instanceof RegExp ? null : "a RegExp object", "mustBeRegExp");
      var mustBeInteger = /* @__PURE__ */ __name((value) => typeof value === "number" && value === (value | 0) ? null : "an integer", "mustBeInteger");
      var mustBeFunction = /* @__PURE__ */ __name((value) => typeof value === "function" ? null : "a function", "mustBeFunction");
      var mustBeArray = /* @__PURE__ */ __name((value) => Array.isArray(value) ? null : "an array", "mustBeArray");
      var mustBeObject = /* @__PURE__ */ __name((value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object", "mustBeObject");
      var mustBeEntryPoints = /* @__PURE__ */ __name((value) => typeof value === "object" && value !== null ? null : "an array or an object", "mustBeEntryPoints");
      var mustBeWebAssemblyModule = /* @__PURE__ */ __name((value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module", "mustBeWebAssemblyModule");
      var mustBeObjectOrNull = /* @__PURE__ */ __name((value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null", "mustBeObjectOrNull");
      var mustBeStringOrBoolean = /* @__PURE__ */ __name((value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean", "mustBeStringOrBoolean");
      var mustBeStringOrObject = /* @__PURE__ */ __name((value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object", "mustBeStringOrObject");
      var mustBeStringOrArray = /* @__PURE__ */ __name((value) => typeof value === "string" || Array.isArray(value) ? null : "a string or an array", "mustBeStringOrArray");
      var mustBeStringOrUint8Array = /* @__PURE__ */ __name((value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array", "mustBeStringOrUint8Array");
      var mustBeStringOrURL = /* @__PURE__ */ __name((value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL", "mustBeStringOrURL");
      function getFlag(object, keys, key, mustBeFn) {
        let value = object[key];
        keys[key + ""] = true;
        if (value === void 0) return void 0;
        let mustBe = mustBeFn(value);
        if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
        return value;
      }
      __name(getFlag, "getFlag");
      function checkForInvalidFlags(object, keys, where) {
        for (let key in object) {
          if (!(key in keys)) {
            throw new Error(`Invalid option ${where}: ${quote(key)}`);
          }
        }
      }
      __name(checkForInvalidFlags, "checkForInvalidFlags");
      function validateInitializeOptions(options) {
        let keys = /* @__PURE__ */ Object.create(null);
        let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
        let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
        let worker = getFlag(options, keys, "worker", mustBeBoolean);
        checkForInvalidFlags(options, keys, "in initialize() call");
        return {
          wasmURL,
          wasmModule,
          worker
        };
      }
      __name(validateInitializeOptions, "validateInitializeOptions");
      function validateMangleCache(mangleCache) {
        let validated;
        if (mangleCache !== void 0) {
          validated = /* @__PURE__ */ Object.create(null);
          for (let key in mangleCache) {
            let value = mangleCache[key];
            if (typeof value === "string" || value === false) {
              validated[key] = value;
            } else {
              throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
            }
          }
        }
        return validated;
      }
      __name(validateMangleCache, "validateMangleCache");
      function pushLogFlags(flags, options, keys, isTTY, logLevelDefault) {
        let color = getFlag(options, keys, "color", mustBeBoolean);
        let logLevel = getFlag(options, keys, "logLevel", mustBeString);
        let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
        if (color !== void 0) flags.push(`--color=${color}`);
        else if (isTTY) flags.push(`--color=true`);
        flags.push(`--log-level=${logLevel || logLevelDefault}`);
        flags.push(`--log-limit=${logLimit || 0}`);
      }
      __name(pushLogFlags, "pushLogFlags");
      function validateStringValue(value, what, key) {
        if (typeof value !== "string") {
          throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
        }
        return value;
      }
      __name(validateStringValue, "validateStringValue");
      function pushCommonFlags(flags, options, keys) {
        let legalComments = getFlag(options, keys, "legalComments", mustBeString);
        let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
        let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
        let target = getFlag(options, keys, "target", mustBeStringOrArray);
        let format = getFlag(options, keys, "format", mustBeString);
        let globalName = getFlag(options, keys, "globalName", mustBeString);
        let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
        let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
        let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
        let minify = getFlag(options, keys, "minify", mustBeBoolean);
        let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
        let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
        let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
        let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
        let drop = getFlag(options, keys, "drop", mustBeArray);
        let dropLabels = getFlag(options, keys, "dropLabels", mustBeArray);
        let charset = getFlag(options, keys, "charset", mustBeString);
        let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
        let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
        let jsx = getFlag(options, keys, "jsx", mustBeString);
        let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
        let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
        let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
        let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
        let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
        let define2 = getFlag(options, keys, "define", mustBeObject);
        let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
        let supported = getFlag(options, keys, "supported", mustBeObject);
        let pure = getFlag(options, keys, "pure", mustBeArray);
        let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
        let platform = getFlag(options, keys, "platform", mustBeString);
        let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
        if (legalComments) flags.push(`--legal-comments=${legalComments}`);
        if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
        if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
        if (target) {
          if (Array.isArray(target)) flags.push(`--target=${Array.from(target).map(validateTarget).join(",")}`);
          else flags.push(`--target=${validateTarget(target)}`);
        }
        if (format) flags.push(`--format=${format}`);
        if (globalName) flags.push(`--global-name=${globalName}`);
        if (platform) flags.push(`--platform=${platform}`);
        if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
        if (minify) flags.push("--minify");
        if (minifySyntax) flags.push("--minify-syntax");
        if (minifyWhitespace) flags.push("--minify-whitespace");
        if (minifyIdentifiers) flags.push("--minify-identifiers");
        if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
        if (charset) flags.push(`--charset=${charset}`);
        if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
        if (ignoreAnnotations) flags.push(`--ignore-annotations`);
        if (drop) for (let what of drop) flags.push(`--drop:${validateStringValue(what, "drop")}`);
        if (dropLabels) flags.push(`--drop-labels=${Array.from(dropLabels).map((what) => validateStringValue(what, "dropLabels")).join(",")}`);
        if (mangleProps) flags.push(`--mangle-props=${mangleProps.source}`);
        if (reserveProps) flags.push(`--reserve-props=${reserveProps.source}`);
        if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
        if (jsx) flags.push(`--jsx=${jsx}`);
        if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
        if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
        if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
        if (jsxDev) flags.push(`--jsx-dev`);
        if (jsxSideEffects) flags.push(`--jsx-side-effects`);
        if (define2) {
          for (let key in define2) {
            if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
            flags.push(`--define:${key}=${validateStringValue(define2[key], "define", key)}`);
          }
        }
        if (logOverride) {
          for (let key in logOverride) {
            if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
            flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
          }
        }
        if (supported) {
          for (let key in supported) {
            if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
            const value = supported[key];
            if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
            flags.push(`--supported:${key}=${value}`);
          }
        }
        if (pure) for (let fn of pure) flags.push(`--pure:${validateStringValue(fn, "pure")}`);
        if (keepNames) flags.push(`--keep-names`);
      }
      __name(pushCommonFlags, "pushCommonFlags");
      function flagsForBuildOptions(callName, options, isTTY, logLevelDefault, writeDefault) {
        var _a;
        let flags = [];
        let entries = [];
        let keys = /* @__PURE__ */ Object.create(null);
        let stdinContents = null;
        let stdinResolveDir = null;
        pushLogFlags(flags, options, keys, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys);
        let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
        let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
        let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
        let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
        let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
        let outfile = getFlag(options, keys, "outfile", mustBeString);
        let outdir = getFlag(options, keys, "outdir", mustBeString);
        let outbase = getFlag(options, keys, "outbase", mustBeString);
        let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
        let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArray);
        let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArray);
        let mainFields = getFlag(options, keys, "mainFields", mustBeArray);
        let conditions = getFlag(options, keys, "conditions", mustBeArray);
        let external = getFlag(options, keys, "external", mustBeArray);
        let packages = getFlag(options, keys, "packages", mustBeString);
        let alias = getFlag(options, keys, "alias", mustBeObject);
        let loader = getFlag(options, keys, "loader", mustBeObject);
        let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
        let publicPath = getFlag(options, keys, "publicPath", mustBeString);
        let entryNames = getFlag(options, keys, "entryNames", mustBeString);
        let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
        let assetNames = getFlag(options, keys, "assetNames", mustBeString);
        let inject = getFlag(options, keys, "inject", mustBeArray);
        let banner = getFlag(options, keys, "banner", mustBeObject);
        let footer = getFlag(options, keys, "footer", mustBeObject);
        let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
        let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
        let stdin = getFlag(options, keys, "stdin", mustBeObject);
        let write = (_a = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a : writeDefault;
        let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
        let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
        keys.plugins = true;
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
        if (bundle) flags.push("--bundle");
        if (allowOverwrite) flags.push("--allow-overwrite");
        if (splitting) flags.push("--splitting");
        if (preserveSymlinks) flags.push("--preserve-symlinks");
        if (metafile) flags.push(`--metafile`);
        if (outfile) flags.push(`--outfile=${outfile}`);
        if (outdir) flags.push(`--outdir=${outdir}`);
        if (outbase) flags.push(`--outbase=${outbase}`);
        if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
        if (packages) flags.push(`--packages=${packages}`);
        if (resolveExtensions) {
          let values = [];
          for (let value of resolveExtensions) {
            validateStringValue(value, "resolve extension");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid resolve extension: ${value}`);
            values.push(value);
          }
          flags.push(`--resolve-extensions=${values.join(",")}`);
        }
        if (publicPath) flags.push(`--public-path=${publicPath}`);
        if (entryNames) flags.push(`--entry-names=${entryNames}`);
        if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
        if (assetNames) flags.push(`--asset-names=${assetNames}`);
        if (mainFields) {
          let values = [];
          for (let value of mainFields) {
            validateStringValue(value, "main field");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid main field: ${value}`);
            values.push(value);
          }
          flags.push(`--main-fields=${values.join(",")}`);
        }
        if (conditions) {
          let values = [];
          for (let value of conditions) {
            validateStringValue(value, "condition");
            if (value.indexOf(",") >= 0) throw new Error(`Invalid condition: ${value}`);
            values.push(value);
          }
          flags.push(`--conditions=${values.join(",")}`);
        }
        if (external) for (let name of external) flags.push(`--external:${validateStringValue(name, "external")}`);
        if (alias) {
          for (let old in alias) {
            if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
            flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
          }
        }
        if (banner) {
          for (let type in banner) {
            if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
            flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
          }
        }
        if (footer) {
          for (let type in footer) {
            if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
            flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
          }
        }
        if (inject) for (let path of inject) flags.push(`--inject:${validateStringValue(path, "inject")}`);
        if (loader) {
          for (let ext in loader) {
            if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
            flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
          }
        }
        if (outExtension) {
          for (let ext in outExtension) {
            if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
            flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
          }
        }
        if (entryPoints) {
          if (Array.isArray(entryPoints)) {
            for (let i = 0, n = entryPoints.length; i < n; i++) {
              let entryPoint = entryPoints[i];
              if (typeof entryPoint === "object" && entryPoint !== null) {
                let entryPointKeys = /* @__PURE__ */ Object.create(null);
                let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
                let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
                checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
                if (input === void 0) throw new Error('Missing property "in" for entry point at index ' + i);
                if (output === void 0) throw new Error('Missing property "out" for entry point at index ' + i);
                entries.push([output, input]);
              } else {
                entries.push(["", validateStringValue(entryPoint, "entry point at index " + i)]);
              }
            }
          } else {
            for (let key in entryPoints) {
              entries.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
            }
          }
        }
        if (stdin) {
          let stdinKeys = /* @__PURE__ */ Object.create(null);
          let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
          let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
          let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
          let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
          checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
          if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
          if (loader2) flags.push(`--loader=${loader2}`);
          if (resolveDir) stdinResolveDir = resolveDir;
          if (typeof contents === "string") stdinContents = encodeUTF8(contents);
          else if (contents instanceof Uint8Array) stdinContents = contents;
        }
        let nodePaths = [];
        if (nodePathsInput) {
          for (let value of nodePathsInput) {
            value += "";
            nodePaths.push(value);
          }
        }
        return {
          entries,
          flags,
          write,
          stdinContents,
          stdinResolveDir,
          absWorkingDir,
          nodePaths,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      __name(flagsForBuildOptions, "flagsForBuildOptions");
      function flagsForTransformOptions(callName, options, isTTY, logLevelDefault) {
        let flags = [];
        let keys = /* @__PURE__ */ Object.create(null);
        pushLogFlags(flags, options, keys, isTTY, logLevelDefault);
        pushCommonFlags(flags, options, keys);
        let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
        let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
        let loader = getFlag(options, keys, "loader", mustBeString);
        let banner = getFlag(options, keys, "banner", mustBeString);
        let footer = getFlag(options, keys, "footer", mustBeString);
        let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
        checkForInvalidFlags(options, keys, `in ${callName}() call`);
        if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
        if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
        if (loader) flags.push(`--loader=${loader}`);
        if (banner) flags.push(`--banner=${banner}`);
        if (footer) flags.push(`--footer=${footer}`);
        return {
          flags,
          mangleCache: validateMangleCache(mangleCache)
        };
      }
      __name(flagsForTransformOptions, "flagsForTransformOptions");
      function createChannel(streamIn) {
        const requestCallbacksByKey = {};
        const closeData = { didClose: false, reason: "" };
        let responseCallbacks = {};
        let nextRequestID = 0;
        let nextBuildKey = 0;
        let stdout = new Uint8Array(16 * 1024);
        let stdoutUsed = 0;
        let readFromStdout = /* @__PURE__ */ __name((chunk) => {
          let limit = stdoutUsed + chunk.length;
          if (limit > stdout.length) {
            let swap = new Uint8Array(limit * 2);
            swap.set(stdout);
            stdout = swap;
          }
          stdout.set(chunk, stdoutUsed);
          stdoutUsed += chunk.length;
          let offset = 0;
          while (offset + 4 <= stdoutUsed) {
            let length = readUInt32LE(stdout, offset);
            if (offset + 4 + length > stdoutUsed) {
              break;
            }
            offset += 4;
            handleIncomingPacket(stdout.subarray(offset, offset + length));
            offset += length;
          }
          if (offset > 0) {
            stdout.copyWithin(0, offset, stdoutUsed);
            stdoutUsed -= offset;
          }
        }, "readFromStdout");
        let afterClose = /* @__PURE__ */ __name((error) => {
          closeData.didClose = true;
          if (error) closeData.reason = ": " + (error.message || error);
          const text = "The service was stopped" + closeData.reason;
          for (let id in responseCallbacks) {
            responseCallbacks[id](text, null);
          }
          responseCallbacks = {};
        }, "afterClose");
        let sendRequest = /* @__PURE__ */ __name((refs, value, callback) => {
          if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
          let id = nextRequestID++;
          responseCallbacks[id] = (error, response) => {
            try {
              callback(error, response);
            } finally {
              if (refs) refs.unref();
            }
          };
          if (refs) refs.ref();
          streamIn.writeToStdin(encodePacket({ id, isRequest: true, value }));
        }, "sendRequest");
        let sendResponse = /* @__PURE__ */ __name((id, value) => {
          if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
          streamIn.writeToStdin(encodePacket({ id, isRequest: false, value }));
        }, "sendResponse");
        let handleRequest = /* @__PURE__ */ __name((id, request) => __async(this, null, function* () {
          try {
            if (request.command === "ping") {
              sendResponse(id, {});
              return;
            }
            if (typeof request.key === "number") {
              const requestCallbacks = requestCallbacksByKey[request.key];
              if (!requestCallbacks) {
                return;
              }
              const callback = requestCallbacks[request.command];
              if (callback) {
                yield callback(id, request);
                return;
              }
            }
            throw new Error(`Invalid command: ` + request.command);
          } catch (e) {
            const errors = [extractErrorMessageV8(e, streamIn, null, void 0, "")];
            try {
              sendResponse(id, { errors });
            } catch (e2) {
            }
          }
        }), "handleRequest");
        let isFirstPacket = true;
        let handleIncomingPacket = /* @__PURE__ */ __name((bytes) => {
          if (isFirstPacket) {
            isFirstPacket = false;
            let binaryVersion = String.fromCharCode(...bytes);
            if (binaryVersion !== "0.23.0") {
              throw new Error(`Cannot start service: Host version "${"0.23.0"}" does not match binary version ${quote(binaryVersion)}`);
            }
            return;
          }
          let packet = decodePacket(bytes);
          if (packet.isRequest) {
            handleRequest(packet.id, packet.value);
          } else {
            let callback = responseCallbacks[packet.id];
            delete responseCallbacks[packet.id];
            if (packet.value.error) callback(packet.value.error, {});
            else callback(null, packet.value);
          }
        }, "handleIncomingPacket");
        let buildOrContext = /* @__PURE__ */ __name(({ callName, refs, options, isTTY, defaultWD, callback }) => {
          let refCount = 0;
          const buildKey = nextBuildKey++;
          const requestCallbacks = {};
          const buildRefs = {
            ref() {
              if (++refCount === 1) {
                if (refs) refs.ref();
              }
            },
            unref() {
              if (--refCount === 0) {
                delete requestCallbacksByKey[buildKey];
                if (refs) refs.unref();
              }
            }
          };
          requestCallbacksByKey[buildKey] = requestCallbacks;
          buildRefs.ref();
          buildOrContextImpl(
            callName,
            buildKey,
            sendRequest,
            sendResponse,
            buildRefs,
            streamIn,
            requestCallbacks,
            options,
            isTTY,
            defaultWD,
            (err, res) => {
              try {
                callback(err, res);
              } finally {
                buildRefs.unref();
              }
            }
          );
        }, "buildOrContext");
        let transform2 = /* @__PURE__ */ __name(({ callName, refs, input, options, isTTY, fs, callback }) => {
          const details = createObjectStash();
          let start = /* @__PURE__ */ __name((inputPath) => {
            try {
              if (typeof input !== "string" && !(input instanceof Uint8Array))
                throw new Error('The input to "transform" must be a string or a Uint8Array');
              let {
                flags,
                mangleCache
              } = flagsForTransformOptions(callName, options, isTTY, transformLogLevelDefault);
              let request = {
                command: "transform",
                flags,
                inputFS: inputPath !== null,
                input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
              };
              if (mangleCache) request.mangleCache = mangleCache;
              sendRequest(refs, request, (error, response) => {
                if (error) return callback(new Error(error), null);
                let errors = replaceDetailsInMessages(response.errors, details);
                let warnings = replaceDetailsInMessages(response.warnings, details);
                let outstanding = 1;
                let next = /* @__PURE__ */ __name(() => {
                  if (--outstanding === 0) {
                    let result = {
                      warnings,
                      code: response.code,
                      map: response.map,
                      mangleCache: void 0,
                      legalComments: void 0
                    };
                    if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
                    if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
                    callback(null, result);
                  }
                }, "next");
                if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
                if (response.codeFS) {
                  outstanding++;
                  fs.readFile(response.code, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.code = contents;
                      next();
                    }
                  });
                }
                if (response.mapFS) {
                  outstanding++;
                  fs.readFile(response.map, (err, contents) => {
                    if (err !== null) {
                      callback(err, null);
                    } else {
                      response.map = contents;
                      next();
                    }
                  });
                }
                next();
              });
            } catch (e) {
              let flags = [];
              try {
                pushLogFlags(flags, options, {}, isTTY, transformLogLevelDefault);
              } catch (e2) {
              }
              const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
              sendRequest(refs, { command: "error", flags, error }, () => {
                error.detail = details.load(error.detail);
                callback(failureErrorWithLog("Transform failed", [error], []), null);
              });
            }
          }, "start");
          if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
            let next = start;
            start = /* @__PURE__ */ __name(() => fs.writeFile(input, next), "start");
          }
          start(null);
        }, "transform2");
        let formatMessages2 = /* @__PURE__ */ __name(({ callName, refs, messages, options, callback }) => {
          if (!options) throw new Error(`Missing second argument in ${callName}() call`);
          let keys = {};
          let kind = getFlag(options, keys, "kind", mustBeString);
          let color = getFlag(options, keys, "color", mustBeBoolean);
          let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
          checkForInvalidFlags(options, keys, `in ${callName}() call`);
          if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
          if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
          let request = {
            command: "format-msgs",
            messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
            isWarning: kind === "warning"
          };
          if (color !== void 0) request.color = color;
          if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
          sendRequest(refs, request, (error, response) => {
            if (error) return callback(new Error(error), null);
            callback(null, response.messages);
          });
        }, "formatMessages2");
        let analyzeMetafile2 = /* @__PURE__ */ __name(({ callName, refs, metafile, options, callback }) => {
          if (options === void 0) options = {};
          let keys = {};
          let color = getFlag(options, keys, "color", mustBeBoolean);
          let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
          checkForInvalidFlags(options, keys, `in ${callName}() call`);
          let request = {
            command: "analyze-metafile",
            metafile
          };
          if (color !== void 0) request.color = color;
          if (verbose !== void 0) request.verbose = verbose;
          sendRequest(refs, request, (error, response) => {
            if (error) return callback(new Error(error), null);
            callback(null, response.result);
          });
        }, "analyzeMetafile2");
        return {
          readFromStdout,
          afterClose,
          service: {
            buildOrContext,
            transform: transform2,
            formatMessages: formatMessages2,
            analyzeMetafile: analyzeMetafile2
          }
        };
      }
      __name(createChannel, "createChannel");
      function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY, defaultWD, callback) {
        const details = createObjectStash();
        const isContext = callName === "context";
        const handleError = /* @__PURE__ */ __name((e, pluginName) => {
          const flags = [];
          try {
            pushLogFlags(flags, options, {}, isTTY, buildLogLevelDefault);
          } catch (e2) {
          }
          const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
          sendRequest(refs, { command: "error", flags, error: message }, () => {
            message.detail = details.load(message.detail);
            callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [message], []), null);
          });
        }, "handleError");
        let plugins;
        if (typeof options === "object") {
          const value = options.plugins;
          if (value !== void 0) {
            if (!Array.isArray(value)) return handleError(new Error(`"plugins" must be an array`), "");
            plugins = value;
          }
        }
        if (plugins && plugins.length > 0) {
          if (streamIn.isSync) return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
          handlePlugins(
            buildKey,
            sendRequest,
            sendResponse,
            refs,
            streamIn,
            requestCallbacks,
            options,
            plugins,
            details
          ).then(
            (result) => {
              if (!result.ok) return handleError(result.error, result.pluginName);
              try {
                buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
              } catch (e) {
                handleError(e, "");
              }
            },
            (e) => handleError(e, "")
          );
          return;
        }
        try {
          buildOrContextContinue(null, (result, done) => done([], []), () => {
          });
        } catch (e) {
          handleError(e, "");
        }
        function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
          const writeDefault = streamIn.hasFS;
          const {
            entries,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir,
            nodePaths,
            mangleCache
          } = flagsForBuildOptions(callName, options, isTTY, buildLogLevelDefault, writeDefault);
          if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
          const request = {
            command: "build",
            key: buildKey,
            entries,
            flags,
            write,
            stdinContents,
            stdinResolveDir,
            absWorkingDir: absWorkingDir || defaultWD,
            nodePaths,
            context: isContext
          };
          if (requestPlugins) request.plugins = requestPlugins;
          if (mangleCache) request.mangleCache = mangleCache;
          const buildResponseToResult = /* @__PURE__ */ __name((response, callback2) => {
            const result = {
              errors: replaceDetailsInMessages(response.errors, details),
              warnings: replaceDetailsInMessages(response.warnings, details),
              outputFiles: void 0,
              metafile: void 0,
              mangleCache: void 0
            };
            const originalErrors = result.errors.slice();
            const originalWarnings = result.warnings.slice();
            if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
            if (response.metafile) result.metafile = JSON.parse(response.metafile);
            if (response.mangleCache) result.mangleCache = response.mangleCache;
            if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
            runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
              if (originalErrors.length > 0 || onEndErrors.length > 0) {
                const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
                return callback2(error, null, onEndErrors, onEndWarnings);
              }
              callback2(null, result, onEndErrors, onEndWarnings);
            });
          }, "buildResponseToResult");
          let latestResultPromise;
          let provideLatestResult;
          if (isContext)
            requestCallbacks["on-end"] = (id, request2) => new Promise((resolve2) => {
              buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
                const response = {
                  errors: onEndErrors,
                  warnings: onEndWarnings
                };
                if (provideLatestResult) provideLatestResult(err, result);
                latestResultPromise = void 0;
                provideLatestResult = void 0;
                sendResponse(id, response);
                resolve2();
              });
            });
          sendRequest(refs, request, (error, response) => {
            if (error) return callback(new Error(error), null);
            if (!isContext) {
              return buildResponseToResult(response, (err, res) => {
                scheduleOnDisposeCallbacks();
                return callback(err, res);
              });
            }
            if (response.errors.length > 0) {
              return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
            }
            let didDispose = false;
            const result = {
              rebuild: /* @__PURE__ */ __name(() => {
                if (!latestResultPromise) latestResultPromise = new Promise((resolve2, reject) => {
                  let settlePromise;
                  provideLatestResult = /* @__PURE__ */ __name((err, result2) => {
                    if (!settlePromise) settlePromise = /* @__PURE__ */ __name(() => err ? reject(err) : resolve2(result2), "settlePromise");
                  }, "provideLatestResult");
                  const triggerAnotherBuild = /* @__PURE__ */ __name(() => {
                    const request2 = {
                      command: "rebuild",
                      key: buildKey
                    };
                    sendRequest(refs, request2, (error2, response2) => {
                      if (error2) {
                        reject(new Error(error2));
                      } else if (settlePromise) {
                        settlePromise();
                      } else {
                        triggerAnotherBuild();
                      }
                    });
                  }, "triggerAnotherBuild");
                  triggerAnotherBuild();
                });
                return latestResultPromise;
              }, "rebuild"),
              watch: /* @__PURE__ */ __name((options2 = {}) => new Promise((resolve2, reject) => {
                if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
                const keys = {};
                checkForInvalidFlags(options2, keys, `in watch() call`);
                const request2 = {
                  command: "watch",
                  key: buildKey
                };
                sendRequest(refs, request2, (error2) => {
                  if (error2) reject(new Error(error2));
                  else resolve2(void 0);
                });
              }), "watch"),
              serve: /* @__PURE__ */ __name((options2 = {}) => new Promise((resolve2, reject) => {
                if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
                const keys = {};
                const port = getFlag(options2, keys, "port", mustBeInteger);
                const host = getFlag(options2, keys, "host", mustBeString);
                const servedir = getFlag(options2, keys, "servedir", mustBeString);
                const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
                const certfile = getFlag(options2, keys, "certfile", mustBeString);
                const fallback = getFlag(options2, keys, "fallback", mustBeString);
                const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
                checkForInvalidFlags(options2, keys, `in serve() call`);
                const request2 = {
                  command: "serve",
                  key: buildKey,
                  onRequest: !!onRequest
                };
                if (port !== void 0) request2.port = port;
                if (host !== void 0) request2.host = host;
                if (servedir !== void 0) request2.servedir = servedir;
                if (keyfile !== void 0) request2.keyfile = keyfile;
                if (certfile !== void 0) request2.certfile = certfile;
                if (fallback !== void 0) request2.fallback = fallback;
                sendRequest(refs, request2, (error2, response2) => {
                  if (error2) return reject(new Error(error2));
                  if (onRequest) {
                    requestCallbacks["serve-request"] = (id, request3) => {
                      onRequest(request3.args);
                      sendResponse(id, {});
                    };
                  }
                  resolve2(response2);
                });
              }), "serve"),
              cancel: /* @__PURE__ */ __name(() => new Promise((resolve2) => {
                if (didDispose) return resolve2();
                const request2 = {
                  command: "cancel",
                  key: buildKey
                };
                sendRequest(refs, request2, () => {
                  resolve2();
                });
              }), "cancel"),
              dispose: /* @__PURE__ */ __name(() => new Promise((resolve2) => {
                if (didDispose) return resolve2();
                didDispose = true;
                const request2 = {
                  command: "dispose",
                  key: buildKey
                };
                sendRequest(refs, request2, () => {
                  resolve2();
                  scheduleOnDisposeCallbacks();
                  refs.unref();
                });
              }), "dispose")
            };
            refs.ref();
            callback(null, result);
          });
        }
        __name(buildOrContextContinue, "buildOrContextContinue");
      }
      __name(buildOrContextImpl, "buildOrContextImpl");
      var handlePlugins = /* @__PURE__ */ __name((buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => __async(void 0, null, function* () {
        let onStartCallbacks = [];
        let onEndCallbacks = [];
        let onResolveCallbacks = {};
        let onLoadCallbacks = {};
        let onDisposeCallbacks = [];
        let nextCallbackID = 0;
        let i = 0;
        let requestPlugins = [];
        let isSetupDone = false;
        plugins = [...plugins];
        for (let item of plugins) {
          let keys = {};
          if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
          const name = getFlag(item, keys, "name", mustBeString);
          if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
          try {
            let setup = getFlag(item, keys, "setup", mustBeFunction);
            if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
            checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
            let plugin = {
              name,
              onStart: false,
              onEnd: false,
              onResolve: [],
              onLoad: []
            };
            i++;
            let resolve2 = /* @__PURE__ */ __name((path, options = {}) => {
              if (!isSetupDone) throw new Error('Cannot call "resolve" before plugin setup has completed');
              if (typeof path !== "string") throw new Error(`The path to resolve must be a string`);
              let keys2 = /* @__PURE__ */ Object.create(null);
              let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
              let importer = getFlag(options, keys2, "importer", mustBeString);
              let namespace = getFlag(options, keys2, "namespace", mustBeString);
              let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
              let kind = getFlag(options, keys2, "kind", mustBeString);
              let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
              let importAttributes = getFlag(options, keys2, "with", mustBeObject);
              checkForInvalidFlags(options, keys2, "in resolve() call");
              return new Promise((resolve22, reject) => {
                const request = {
                  command: "resolve",
                  path,
                  key: buildKey,
                  pluginName: name
                };
                if (pluginName != null) request.pluginName = pluginName;
                if (importer != null) request.importer = importer;
                if (namespace != null) request.namespace = namespace;
                if (resolveDir != null) request.resolveDir = resolveDir;
                if (kind != null) request.kind = kind;
                else throw new Error(`Must specify "kind" when calling "resolve"`);
                if (pluginData != null) request.pluginData = details.store(pluginData);
                if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
                sendRequest(refs, request, (error, response) => {
                  if (error !== null) reject(new Error(error));
                  else resolve22({
                    errors: replaceDetailsInMessages(response.errors, details),
                    warnings: replaceDetailsInMessages(response.warnings, details),
                    path: response.path,
                    external: response.external,
                    sideEffects: response.sideEffects,
                    namespace: response.namespace,
                    suffix: response.suffix,
                    pluginData: details.load(response.pluginData)
                  });
                });
              });
            }, "resolve");
            let promise = setup({
              initialOptions,
              resolve: resolve2,
              onStart(callback) {
                let registeredText = `This error came from the "onStart" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
                onStartCallbacks.push({ name, callback, note: registeredNote });
                plugin.onStart = true;
              },
              onEnd(callback) {
                let registeredText = `This error came from the "onEnd" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
                onEndCallbacks.push({ name, callback, note: registeredNote });
                plugin.onEnd = true;
              },
              onResolve(options, callback) {
                let registeredText = `This error came from the "onResolve" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
                let keys2 = {};
                let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys2, "namespace", mustBeString);
                checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
                if (filter == null) throw new Error(`onResolve() call is missing a filter`);
                let id = nextCallbackID++;
                onResolveCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onResolve.push({ id, filter: filter.source, namespace: namespace || "" });
              },
              onLoad(options, callback) {
                let registeredText = `This error came from the "onLoad" callback registered here:`;
                let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
                let keys2 = {};
                let filter = getFlag(options, keys2, "filter", mustBeRegExp);
                let namespace = getFlag(options, keys2, "namespace", mustBeString);
                checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
                if (filter == null) throw new Error(`onLoad() call is missing a filter`);
                let id = nextCallbackID++;
                onLoadCallbacks[id] = { name, callback, note: registeredNote };
                plugin.onLoad.push({ id, filter: filter.source, namespace: namespace || "" });
              },
              onDispose(callback) {
                onDisposeCallbacks.push(callback);
              },
              esbuild: streamIn.esbuild
            });
            if (promise) yield promise;
            requestPlugins.push(plugin);
          } catch (e) {
            return { ok: false, error: e, pluginName: name };
          }
        }
        requestCallbacks["on-start"] = (id, request) => __async(void 0, null, function* () {
          let response = { errors: [], warnings: [] };
          yield Promise.all(onStartCallbacks.map((_0) => __async(void 0, [_0], function* ({ name, callback, note }) {
            try {
              let result = yield callback();
              if (result != null) {
                if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
                let keys = {};
                let errors = getFlag(result, keys, "errors", mustBeArray);
                let warnings = getFlag(result, keys, "warnings", mustBeArray);
                checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
                if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
                if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
              }
            } catch (e) {
              response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
            }
          })));
          sendResponse(id, response);
        });
        requestCallbacks["on-resolve"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onResolveCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                importer: request.importer,
                namespace: request.namespace,
                resolveDir: request.resolveDir,
                kind: request.kind,
                pluginData: details.load(request.pluginData),
                with: request.with
              });
              if (result != null) {
                if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
                let keys = {};
                let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                let path = getFlag(result, keys, "path", mustBeString);
                let namespace = getFlag(result, keys, "namespace", mustBeString);
                let suffix = getFlag(result, keys, "suffix", mustBeString);
                let external = getFlag(result, keys, "external", mustBeBoolean);
                let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
                let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                let errors = getFlag(result, keys, "errors", mustBeArray);
                let warnings = getFlag(result, keys, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null) response.pluginName = pluginName;
                if (path != null) response.path = path;
                if (namespace != null) response.namespace = namespace;
                if (suffix != null) response.suffix = suffix;
                if (external != null) response.external = external;
                if (sideEffects != null) response.sideEffects = sideEffects;
                if (pluginData != null) response.pluginData = details.store(pluginData);
                if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        requestCallbacks["on-load"] = (id, request) => __async(void 0, null, function* () {
          let response = {}, name = "", callback, note;
          for (let id2 of request.ids) {
            try {
              ({ name, callback, note } = onLoadCallbacks[id2]);
              let result = yield callback({
                path: request.path,
                namespace: request.namespace,
                suffix: request.suffix,
                pluginData: details.load(request.pluginData),
                with: request.with
              });
              if (result != null) {
                if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
                let keys = {};
                let pluginName = getFlag(result, keys, "pluginName", mustBeString);
                let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
                let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
                let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
                let loader = getFlag(result, keys, "loader", mustBeString);
                let errors = getFlag(result, keys, "errors", mustBeArray);
                let warnings = getFlag(result, keys, "warnings", mustBeArray);
                let watchFiles = getFlag(result, keys, "watchFiles", mustBeArray);
                let watchDirs = getFlag(result, keys, "watchDirs", mustBeArray);
                checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
                response.id = id2;
                if (pluginName != null) response.pluginName = pluginName;
                if (contents instanceof Uint8Array) response.contents = contents;
                else if (contents != null) response.contents = encodeUTF8(contents);
                if (resolveDir != null) response.resolveDir = resolveDir;
                if (pluginData != null) response.pluginData = details.store(pluginData);
                if (loader != null) response.loader = loader;
                if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
                if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
                if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
                break;
              }
            } catch (e) {
              response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
              break;
            }
          }
          sendResponse(id, response);
        });
        let runOnEndCallbacks = /* @__PURE__ */ __name((result, done) => done([], []), "runOnEndCallbacks");
        if (onEndCallbacks.length > 0) {
          runOnEndCallbacks = /* @__PURE__ */ __name((result, done) => {
            (() => __async(void 0, null, function* () {
              const onEndErrors = [];
              const onEndWarnings = [];
              for (const { name, callback, note } of onEndCallbacks) {
                let newErrors;
                let newWarnings;
                try {
                  const value = yield callback(result);
                  if (value != null) {
                    if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
                    let keys = {};
                    let errors = getFlag(value, keys, "errors", mustBeArray);
                    let warnings = getFlag(value, keys, "warnings", mustBeArray);
                    checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
                    if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
                    if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
                  }
                } catch (e) {
                  newErrors = [extractErrorMessageV8(e, streamIn, details, note && note(), name)];
                }
                if (newErrors) {
                  onEndErrors.push(...newErrors);
                  try {
                    result.errors.push(...newErrors);
                  } catch (e) {
                  }
                }
                if (newWarnings) {
                  onEndWarnings.push(...newWarnings);
                  try {
                    result.warnings.push(...newWarnings);
                  } catch (e) {
                  }
                }
              }
              done(onEndErrors, onEndWarnings);
            }))();
          }, "runOnEndCallbacks");
        }
        let scheduleOnDisposeCallbacks = /* @__PURE__ */ __name(() => {
          for (const cb of onDisposeCallbacks) {
            setTimeout(() => cb(), 0);
          }
        }, "scheduleOnDisposeCallbacks");
        isSetupDone = true;
        return {
          ok: true,
          requestPlugins,
          runOnEndCallbacks,
          scheduleOnDisposeCallbacks
        };
      }), "handlePlugins");
      function createObjectStash() {
        const map = /* @__PURE__ */ new Map();
        let nextID = 0;
        return {
          load(id) {
            return map.get(id);
          },
          store(value) {
            if (value === void 0) return -1;
            const id = nextID++;
            map.set(id, value);
            return id;
          }
        };
      }
      __name(createObjectStash, "createObjectStash");
      function extractCallerV8(e, streamIn, ident) {
        let note;
        let tried = false;
        return () => {
          if (tried) return note;
          tried = true;
          try {
            let lines = (e.stack + "").split("\n");
            lines.splice(1, 1);
            let location2 = parseStackLinesV8(streamIn, lines, ident);
            if (location2) {
              note = { text: e.message, location: location2 };
              return note;
            }
          } catch (e2) {
          }
        };
      }
      __name(extractCallerV8, "extractCallerV8");
      function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
        let text = "Internal error";
        let location2 = null;
        try {
          text = (e && e.message || e) + "";
        } catch (e2) {
        }
        try {
          location2 = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
        } catch (e2) {
        }
        return { id: "", pluginName, text, location: location2, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
      }
      __name(extractErrorMessageV8, "extractErrorMessageV8");
      function parseStackLinesV8(streamIn, lines, ident) {
        let at = "    at ";
        if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
          for (let i = 1; i < lines.length; i++) {
            let line = lines[i];
            if (!line.startsWith(at)) continue;
            line = line.slice(at.length);
            while (true) {
              let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
              if (match) {
                line = match[1];
                continue;
              }
              match = /^(\S+):(\d+):(\d+)$/.exec(line);
              if (match) {
                let contents;
                try {
                  contents = streamIn.readFileSync(match[1], "utf8");
                } catch (e) {
                  break;
                }
                let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
                let column = +match[3] - 1;
                let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
                return {
                  file: match[1],
                  namespace: "file",
                  line: +match[2],
                  column: encodeUTF8(lineText.slice(0, column)).length,
                  length: encodeUTF8(lineText.slice(column, column + length)).length,
                  lineText: lineText + "\n" + lines.slice(1).join("\n"),
                  suggestion: ""
                };
              }
              break;
            }
          }
        }
        return null;
      }
      __name(parseStackLinesV8, "parseStackLinesV8");
      function failureErrorWithLog(text, errors, warnings) {
        let limit = 5;
        text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
          if (i === limit) return "\n...";
          if (!e.location) return `
error: ${e.text}`;
          let { file, line, column } = e.location;
          let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
          return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
        }).join("");
        let error = new Error(text);
        for (const [key, value] of [["errors", errors], ["warnings", warnings]]) {
          Object.defineProperty(error, key, {
            configurable: true,
            enumerable: true,
            get: /* @__PURE__ */ __name(() => value, "get"),
            set: /* @__PURE__ */ __name((value2) => Object.defineProperty(error, key, {
              configurable: true,
              enumerable: true,
              value: value2
            }), "set")
          });
        }
        return error;
      }
      __name(failureErrorWithLog, "failureErrorWithLog");
      function replaceDetailsInMessages(messages, stash) {
        for (const message of messages) {
          message.detail = stash.load(message.detail);
        }
        return messages;
      }
      __name(replaceDetailsInMessages, "replaceDetailsInMessages");
      function sanitizeLocation(location2, where, terminalWidth) {
        if (location2 == null) return null;
        let keys = {};
        let file = getFlag(location2, keys, "file", mustBeString);
        let namespace = getFlag(location2, keys, "namespace", mustBeString);
        let line = getFlag(location2, keys, "line", mustBeInteger);
        let column = getFlag(location2, keys, "column", mustBeInteger);
        let length = getFlag(location2, keys, "length", mustBeInteger);
        let lineText = getFlag(location2, keys, "lineText", mustBeString);
        let suggestion = getFlag(location2, keys, "suggestion", mustBeString);
        checkForInvalidFlags(location2, keys, where);
        if (lineText) {
          const relevantASCII = lineText.slice(
            0,
            (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80)
          );
          if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) {
            lineText = relevantASCII;
          }
        }
        return {
          file: file || "",
          namespace: namespace || "",
          line: line || 0,
          column: column || 0,
          length: length || 0,
          lineText: lineText || "",
          suggestion: suggestion || ""
        };
      }
      __name(sanitizeLocation, "sanitizeLocation");
      function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
        let messagesClone = [];
        let index = 0;
        for (const message of messages) {
          let keys = {};
          let id = getFlag(message, keys, "id", mustBeString);
          let pluginName = getFlag(message, keys, "pluginName", mustBeString);
          let text = getFlag(message, keys, "text", mustBeString);
          let location2 = getFlag(message, keys, "location", mustBeObjectOrNull);
          let notes = getFlag(message, keys, "notes", mustBeArray);
          let detail = getFlag(message, keys, "detail", canBeAnything);
          let where = `in element ${index} of "${property}"`;
          checkForInvalidFlags(message, keys, where);
          let notesClone = [];
          if (notes) {
            for (const note of notes) {
              let noteKeys = {};
              let noteText = getFlag(note, noteKeys, "text", mustBeString);
              let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
              checkForInvalidFlags(note, noteKeys, where);
              notesClone.push({
                text: noteText || "",
                location: sanitizeLocation(noteLocation, where, terminalWidth)
              });
            }
          }
          messagesClone.push({
            id: id || "",
            pluginName: pluginName || fallbackPluginName,
            text: text || "",
            location: sanitizeLocation(location2, where, terminalWidth),
            notes: notesClone,
            detail: stash ? stash.store(detail) : -1
          });
          index++;
        }
        return messagesClone;
      }
      __name(sanitizeMessages, "sanitizeMessages");
      function sanitizeStringArray(values, property) {
        const result = [];
        for (const value of values) {
          if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
          result.push(value);
        }
        return result;
      }
      __name(sanitizeStringArray, "sanitizeStringArray");
      function sanitizeStringMap(map, property) {
        const result = /* @__PURE__ */ Object.create(null);
        for (const key in map) {
          const value = map[key];
          if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
          result[key] = value;
        }
        return result;
      }
      __name(sanitizeStringMap, "sanitizeStringMap");
      function convertOutputFiles({ path, contents, hash }) {
        let text = null;
        return {
          path,
          contents,
          hash,
          get text() {
            const binary = this.contents;
            if (text === null || binary !== contents) {
              contents = binary;
              text = decodeUTF8(binary);
            }
            return text;
          }
        };
      }
      __name(convertOutputFiles, "convertOutputFiles");
      var version = "0.23.0";
      var build = /* @__PURE__ */ __name((options) => ensureServiceIsRunning().build(options), "build");
      var context = /* @__PURE__ */ __name((options) => ensureServiceIsRunning().context(options), "context");
      var transform = /* @__PURE__ */ __name((input, options) => ensureServiceIsRunning().transform(input, options), "transform");
      var formatMessages = /* @__PURE__ */ __name((messages, options) => ensureServiceIsRunning().formatMessages(messages, options), "formatMessages");
      var analyzeMetafile = /* @__PURE__ */ __name((metafile, options) => ensureServiceIsRunning().analyzeMetafile(metafile, options), "analyzeMetafile");
      var buildSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "buildSync" API only works in node`);
      }, "buildSync");
      var transformSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "transformSync" API only works in node`);
      }, "transformSync");
      var formatMessagesSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "formatMessagesSync" API only works in node`);
      }, "formatMessagesSync");
      var analyzeMetafileSync = /* @__PURE__ */ __name(() => {
        throw new Error(`The "analyzeMetafileSync" API only works in node`);
      }, "analyzeMetafileSync");
      var stop = /* @__PURE__ */ __name(() => {
        if (stopService) stopService();
        return Promise.resolve();
      }, "stop");
      var initializePromise;
      var stopService;
      var longLivedService;
      var ensureServiceIsRunning = /* @__PURE__ */ __name(() => {
        if (longLivedService) return longLivedService;
        if (initializePromise) throw new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this');
        throw new Error('You need to call "initialize" before calling this');
      }, "ensureServiceIsRunning");
      var initialize = /* @__PURE__ */ __name((options) => {
        options = validateInitializeOptions(options || {});
        let wasmURL = options.wasmURL;
        let wasmModule = options.wasmModule;
        let useWorker = options.worker !== false;
        if (!wasmURL && !wasmModule) throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');
        if (initializePromise) throw new Error('Cannot call "initialize" more than once');
        initializePromise = startRunningService(wasmURL || "", wasmModule, useWorker);
        initializePromise.catch(() => {
          initializePromise = void 0;
        });
        return initializePromise;
      }, "initialize");
      var startRunningService = /* @__PURE__ */ __name((wasmURL, wasmModule, useWorker) => __async(void 0, null, function* () {
        let worker;
        if (useWorker) {
          let blob = new Blob([`onmessage=${'((postMessage) => {\n      // Copyright 2018 The Go Authors. All rights reserved.\n      // Use of this source code is governed by a BSD-style\n      // license that can be found in the LICENSE file.\n      var __async = (__this, __arguments, generator) => {\n        return new Promise((resolve, reject) => {\n          var fulfilled = (value) => {\n            try {\n              step(generator.next(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var rejected = (value) => {\n            try {\n              step(generator.throw(value));\n            } catch (e) {\n              reject(e);\n            }\n          };\n          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n          step((generator = generator.apply(__this, __arguments)).next());\n        });\n      };\n      let onmessage;\n      let globalThis = {};\n      for (let o = self; o; o = Object.getPrototypeOf(o))\n        for (let k of Object.getOwnPropertyNames(o))\n          if (!(k in globalThis))\n            Object.defineProperty(globalThis, k, { get: () => self[k] });\n      "use strict";\n      (() => {\n        const enosys = () => {\n          const err = new Error("not implemented");\n          err.code = "ENOSYS";\n          return err;\n        };\n        if (!globalThis.fs) {\n          let outputBuf = "";\n          globalThis.fs = {\n            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },\n            // unused\n            writeSync(fd, buf) {\n              outputBuf += decoder.decode(buf);\n              const nl = outputBuf.lastIndexOf("\\n");\n              if (nl != -1) {\n                console.log(outputBuf.substring(0, nl));\n                outputBuf = outputBuf.substring(nl + 1);\n              }\n              return buf.length;\n            },\n            write(fd, buf, offset, length, position, callback) {\n              if (offset !== 0 || length !== buf.length || position !== null) {\n                callback(enosys());\n                return;\n              }\n              const n = this.writeSync(fd, buf);\n              callback(null, n);\n            },\n            chmod(path, mode, callback) {\n              callback(enosys());\n            },\n            chown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            close(fd, callback) {\n              callback(enosys());\n            },\n            fchmod(fd, mode, callback) {\n              callback(enosys());\n            },\n            fchown(fd, uid, gid, callback) {\n              callback(enosys());\n            },\n            fstat(fd, callback) {\n              callback(enosys());\n            },\n            fsync(fd, callback) {\n              callback(null);\n            },\n            ftruncate(fd, length, callback) {\n              callback(enosys());\n            },\n            lchown(path, uid, gid, callback) {\n              callback(enosys());\n            },\n            link(path, link, callback) {\n              callback(enosys());\n            },\n            lstat(path, callback) {\n              callback(enosys());\n            },\n            mkdir(path, perm, callback) {\n              callback(enosys());\n            },\n            open(path, flags, mode, callback) {\n              callback(enosys());\n            },\n            read(fd, buffer, offset, length, position, callback) {\n              callback(enosys());\n            },\n            readdir(path, callback) {\n              callback(enosys());\n            },\n            readlink(path, callback) {\n              callback(enosys());\n            },\n            rename(from, to, callback) {\n              callback(enosys());\n            },\n            rmdir(path, callback) {\n              callback(enosys());\n            },\n            stat(path, callback) {\n              callback(enosys());\n            },\n            symlink(path, link, callback) {\n              callback(enosys());\n            },\n            truncate(path, length, callback) {\n              callback(enosys());\n            },\n            unlink(path, callback) {\n              callback(enosys());\n            },\n            utimes(path, atime, mtime, callback) {\n              callback(enosys());\n            }\n          };\n        }\n        if (!globalThis.process) {\n          globalThis.process = {\n            getuid() {\n              return -1;\n            },\n            getgid() {\n              return -1;\n            },\n            geteuid() {\n              return -1;\n            },\n            getegid() {\n              return -1;\n            },\n            getgroups() {\n              throw enosys();\n            },\n            pid: -1,\n            ppid: -1,\n            umask() {\n              throw enosys();\n            },\n            cwd() {\n              throw enosys();\n            },\n            chdir() {\n              throw enosys();\n            }\n          };\n        }\n        if (!globalThis.crypto) {\n          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");\n        }\n        if (!globalThis.performance) {\n          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");\n        }\n        if (!globalThis.TextEncoder) {\n          throw new Error("globalThis.TextEncoder is not available, polyfill required");\n        }\n        if (!globalThis.TextDecoder) {\n          throw new Error("globalThis.TextDecoder is not available, polyfill required");\n        }\n        const encoder = new TextEncoder("utf-8");\n        const decoder = new TextDecoder("utf-8");\n        globalThis.Go = class {\n          constructor() {\n            this.argv = ["js"];\n            this.env = {};\n            this.exit = (code) => {\n              if (code !== 0) {\n                console.warn("exit code:", code);\n              }\n            };\n            this._exitPromise = new Promise((resolve) => {\n              this._resolveExitPromise = resolve;\n            });\n            this._pendingEvent = null;\n            this._scheduledTimeouts = /* @__PURE__ */ new Map();\n            this._nextCallbackTimeoutID = 1;\n            const setInt64 = (addr, v) => {\n              this.mem.setUint32(addr + 0, v, true);\n              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);\n            };\n            const setInt32 = (addr, v) => {\n              this.mem.setUint32(addr + 0, v, true);\n            };\n            const getInt64 = (addr) => {\n              const low = this.mem.getUint32(addr + 0, true);\n              const high = this.mem.getInt32(addr + 4, true);\n              return low + high * 4294967296;\n            };\n            const loadValue = (addr) => {\n              const f = this.mem.getFloat64(addr, true);\n              if (f === 0) {\n                return void 0;\n              }\n              if (!isNaN(f)) {\n                return f;\n              }\n              const id = this.mem.getUint32(addr, true);\n              return this._values[id];\n            };\n            const storeValue = (addr, v) => {\n              const nanHead = 2146959360;\n              if (typeof v === "number" && v !== 0) {\n                if (isNaN(v)) {\n                  this.mem.setUint32(addr + 4, nanHead, true);\n                  this.mem.setUint32(addr, 0, true);\n                  return;\n                }\n                this.mem.setFloat64(addr, v, true);\n                return;\n              }\n              if (v === void 0) {\n                this.mem.setFloat64(addr, 0, true);\n                return;\n              }\n              let id = this._ids.get(v);\n              if (id === void 0) {\n                id = this._idPool.pop();\n                if (id === void 0) {\n                  id = this._values.length;\n                }\n                this._values[id] = v;\n                this._goRefCounts[id] = 0;\n                this._ids.set(v, id);\n              }\n              this._goRefCounts[id]++;\n              let typeFlag = 0;\n              switch (typeof v) {\n                case "object":\n                  if (v !== null) {\n                    typeFlag = 1;\n                  }\n                  break;\n                case "string":\n                  typeFlag = 2;\n                  break;\n                case "symbol":\n                  typeFlag = 3;\n                  break;\n                case "function":\n                  typeFlag = 4;\n                  break;\n              }\n              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);\n              this.mem.setUint32(addr, id, true);\n            };\n            const loadSlice = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return new Uint8Array(this._inst.exports.mem.buffer, array, len);\n            };\n            const loadSliceOfValues = (addr) => {\n              const array = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              const a = new Array(len);\n              for (let i = 0; i < len; i++) {\n                a[i] = loadValue(array + i * 8);\n              }\n              return a;\n            };\n            const loadString = (addr) => {\n              const saddr = getInt64(addr + 0);\n              const len = getInt64(addr + 8);\n              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));\n            };\n            const timeOrigin = Date.now() - performance.now();\n            this.importObject = {\n              _gotest: {\n                add: (a, b) => a + b\n              },\n              gojs: {\n                // Go\'s SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)\n                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported\n                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).\n                // This changes the SP, thus we have to update the SP used by the imported function.\n                // func wasmExit(code int32)\n                "runtime.wasmExit": (sp) => {\n                  sp >>>= 0;\n                  const code = this.mem.getInt32(sp + 8, true);\n                  this.exited = true;\n                  delete this._inst;\n                  delete this._values;\n                  delete this._goRefCounts;\n                  delete this._ids;\n                  delete this._idPool;\n                  this.exit(code);\n                },\n                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)\n                "runtime.wasmWrite": (sp) => {\n                  sp >>>= 0;\n                  const fd = getInt64(sp + 8);\n                  const p = getInt64(sp + 16);\n                  const n = this.mem.getInt32(sp + 24, true);\n                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));\n                },\n                // func resetMemoryDataView()\n                "runtime.resetMemoryDataView": (sp) => {\n                  sp >>>= 0;\n                  this.mem = new DataView(this._inst.exports.mem.buffer);\n                },\n                // func nanotime1() int64\n                "runtime.nanotime1": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);\n                },\n                // func walltime() (sec int64, nsec int32)\n                "runtime.walltime": (sp) => {\n                  sp >>>= 0;\n                  const msec = (/* @__PURE__ */ new Date()).getTime();\n                  setInt64(sp + 8, msec / 1e3);\n                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);\n                },\n                // func scheduleTimeoutEvent(delay int64) int32\n                "runtime.scheduleTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this._nextCallbackTimeoutID;\n                  this._nextCallbackTimeoutID++;\n                  this._scheduledTimeouts.set(id, setTimeout(\n                    () => {\n                      this._resume();\n                      while (this._scheduledTimeouts.has(id)) {\n                        console.warn("scheduleTimeoutEvent: missed timeout event");\n                        this._resume();\n                      }\n                    },\n                    getInt64(sp + 8)\n                  ));\n                  this.mem.setInt32(sp + 16, id, true);\n                },\n                // func clearTimeoutEvent(id int32)\n                "runtime.clearTimeoutEvent": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getInt32(sp + 8, true);\n                  clearTimeout(this._scheduledTimeouts.get(id));\n                  this._scheduledTimeouts.delete(id);\n                },\n                // func getRandomData(r []byte)\n                "runtime.getRandomData": (sp) => {\n                  sp >>>= 0;\n                  crypto.getRandomValues(loadSlice(sp + 8));\n                },\n                // func finalizeRef(v ref)\n                "syscall/js.finalizeRef": (sp) => {\n                  sp >>>= 0;\n                  const id = this.mem.getUint32(sp + 8, true);\n                  this._goRefCounts[id]--;\n                  if (this._goRefCounts[id] === 0) {\n                    const v = this._values[id];\n                    this._values[id] = null;\n                    this._ids.delete(v);\n                    this._idPool.push(id);\n                  }\n                },\n                // func stringVal(value string) ref\n                "syscall/js.stringVal": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, loadString(sp + 8));\n                },\n                // func valueGet(v ref, p string) ref\n                "syscall/js.valueGet": (sp) => {\n                  sp >>>= 0;\n                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));\n                  sp = this._inst.exports.getsp() >>> 0;\n                  storeValue(sp + 32, result);\n                },\n                // func valueSet(v ref, p string, x ref)\n                "syscall/js.valueSet": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));\n                },\n                // func valueDelete(v ref, p string)\n                "syscall/js.valueDelete": (sp) => {\n                  sp >>>= 0;\n                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));\n                },\n                // func valueIndex(v ref, i int) ref\n                "syscall/js.valueIndex": (sp) => {\n                  sp >>>= 0;\n                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));\n                },\n                // valueSetIndex(v ref, i int, x ref)\n                "syscall/js.valueSetIndex": (sp) => {\n                  sp >>>= 0;\n                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));\n                },\n                // func valueCall(v ref, m string, args []ref) (ref, bool)\n                "syscall/js.valueCall": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const m = Reflect.get(v, loadString(sp + 16));\n                    const args = loadSliceOfValues(sp + 32);\n                    const result = Reflect.apply(m, v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, result);\n                    this.mem.setUint8(sp + 64, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 56, err);\n                    this.mem.setUint8(sp + 64, 0);\n                  }\n                },\n                // func valueInvoke(v ref, args []ref) (ref, bool)\n                "syscall/js.valueInvoke": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.apply(v, void 0, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                // func valueNew(v ref, args []ref) (ref, bool)\n                "syscall/js.valueNew": (sp) => {\n                  sp >>>= 0;\n                  try {\n                    const v = loadValue(sp + 8);\n                    const args = loadSliceOfValues(sp + 16);\n                    const result = Reflect.construct(v, args);\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, result);\n                    this.mem.setUint8(sp + 48, 1);\n                  } catch (err) {\n                    sp = this._inst.exports.getsp() >>> 0;\n                    storeValue(sp + 40, err);\n                    this.mem.setUint8(sp + 48, 0);\n                  }\n                },\n                // func valueLength(v ref) int\n                "syscall/js.valueLength": (sp) => {\n                  sp >>>= 0;\n                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));\n                },\n                // valuePrepareString(v ref) (ref, int)\n                "syscall/js.valuePrepareString": (sp) => {\n                  sp >>>= 0;\n                  const str = encoder.encode(String(loadValue(sp + 8)));\n                  storeValue(sp + 16, str);\n                  setInt64(sp + 24, str.length);\n                },\n                // valueLoadString(v ref, b []byte)\n                "syscall/js.valueLoadString": (sp) => {\n                  sp >>>= 0;\n                  const str = loadValue(sp + 8);\n                  loadSlice(sp + 16).set(str);\n                },\n                // func valueInstanceOf(v ref, t ref) bool\n                "syscall/js.valueInstanceOf": (sp) => {\n                  sp >>>= 0;\n                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);\n                },\n                // func copyBytesToGo(dst []byte, src ref) (int, bool)\n                "syscall/js.copyBytesToGo": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadSlice(sp + 8);\n                  const src = loadValue(sp + 32);\n                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                // func copyBytesToJS(dst ref, src []byte) (int, bool)\n                "syscall/js.copyBytesToJS": (sp) => {\n                  sp >>>= 0;\n                  const dst = loadValue(sp + 8);\n                  const src = loadSlice(sp + 16);\n                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {\n                    this.mem.setUint8(sp + 48, 0);\n                    return;\n                  }\n                  const toCopy = src.subarray(0, dst.length);\n                  dst.set(toCopy);\n                  setInt64(sp + 40, toCopy.length);\n                  this.mem.setUint8(sp + 48, 1);\n                },\n                "debug": (value) => {\n                  console.log(value);\n                }\n              }\n            };\n          }\n          run(instance) {\n            return __async(this, null, function* () {\n              if (!(instance instanceof WebAssembly.Instance)) {\n                throw new Error("Go.run: WebAssembly.Instance expected");\n              }\n              this._inst = instance;\n              this.mem = new DataView(this._inst.exports.mem.buffer);\n              this._values = [\n                // JS values that Go currently has references to, indexed by reference id\n                NaN,\n                0,\n                null,\n                true,\n                false,\n                globalThis,\n                this\n              ];\n              this._goRefCounts = new Array(this._values.length).fill(Infinity);\n              this._ids = /* @__PURE__ */ new Map([\n                // mapping from JS values to reference ids\n                [0, 1],\n                [null, 2],\n                [true, 3],\n                [false, 4],\n                [globalThis, 5],\n                [this, 6]\n              ]);\n              this._idPool = [];\n              this.exited = false;\n              let offset = 4096;\n              const strPtr = (str) => {\n                const ptr = offset;\n                const bytes = encoder.encode(str + "\\0");\n                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);\n                offset += bytes.length;\n                if (offset % 8 !== 0) {\n                  offset += 8 - offset % 8;\n                }\n                return ptr;\n              };\n              const argc = this.argv.length;\n              const argvPtrs = [];\n              this.argv.forEach((arg) => {\n                argvPtrs.push(strPtr(arg));\n              });\n              argvPtrs.push(0);\n              const keys = Object.keys(this.env).sort();\n              keys.forEach((key) => {\n                argvPtrs.push(strPtr(`${key}=${this.env[key]}`));\n              });\n              argvPtrs.push(0);\n              const argv = offset;\n              argvPtrs.forEach((ptr) => {\n                this.mem.setUint32(offset, ptr, true);\n                this.mem.setUint32(offset + 4, 0, true);\n                offset += 8;\n              });\n              const wasmMinDataAddr = 4096 + 8192;\n              if (offset >= wasmMinDataAddr) {\n                throw new Error("total length of command line and environment variables exceeds limit");\n              }\n              this._inst.exports.run(argc, argv);\n              if (this.exited) {\n                this._resolveExitPromise();\n              }\n              yield this._exitPromise;\n            });\n          }\n          _resume() {\n            if (this.exited) {\n              throw new Error("Go program has already exited");\n            }\n            this._inst.exports.resume();\n            if (this.exited) {\n              this._resolveExitPromise();\n            }\n          }\n          _makeFuncWrapper(id) {\n            const go = this;\n            return function() {\n              const event = { id, this: this, args: arguments };\n              go._pendingEvent = event;\n              go._resume();\n              return event.result;\n            };\n          }\n        };\n      })();\n      onmessage = ({ data: wasm }) => {\n        let decoder = new TextDecoder();\n        let fs = globalThis.fs;\n        let stderr = "";\n        fs.writeSync = (fd, buffer) => {\n          if (fd === 1) {\n            postMessage(buffer);\n          } else if (fd === 2) {\n            stderr += decoder.decode(buffer);\n            let parts = stderr.split("\\n");\n            if (parts.length > 1) console.log(parts.slice(0, -1).join("\\n"));\n            stderr = parts[parts.length - 1];\n          } else {\n            throw new Error("Bad write");\n          }\n          return buffer.length;\n        };\n        let stdin = [];\n        let resumeStdin;\n        let stdinPos = 0;\n        onmessage = ({ data }) => {\n          if (data.length > 0) {\n            stdin.push(data);\n            if (resumeStdin) resumeStdin();\n          }\n          return go;\n        };\n        fs.read = (fd, buffer, offset, length, position, callback) => {\n          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {\n            throw new Error("Bad read");\n          }\n          if (stdin.length === 0) {\n            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);\n            return;\n          }\n          let first = stdin[0];\n          let count = Math.max(0, Math.min(length, first.length - stdinPos));\n          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);\n          stdinPos += count;\n          if (stdinPos === first.length) {\n            stdin.shift();\n            stdinPos = 0;\n          }\n          callback(null, count);\n        };\n        let go = new globalThis.Go();\n        go.argv = ["", `--service=${"0.23.0"}`];\n        tryToInstantiateModule(wasm, go).then(\n          (instance) => {\n            postMessage(null);\n            go.run(instance);\n          },\n          (error) => {\n            postMessage(error);\n          }\n        );\n        return go;\n      };\n      function tryToInstantiateModule(wasm, go) {\n        return __async(this, null, function* () {\n          if (wasm instanceof WebAssembly.Module) {\n            return WebAssembly.instantiate(wasm, go.importObject);\n          }\n          const res = yield fetch(wasm);\n          if (!res.ok) throw new Error(`Failed to download ${JSON.stringify(wasm)}`);\n          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {\n            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);\n            return result2.instance;\n          }\n          const bytes = yield res.arrayBuffer();\n          const result = yield WebAssembly.instantiate(bytes, go.importObject);\n          return result.instance;\n        });\n      }\n      return (m) => onmessage(m);\n    })'}(postMessage)`], { type: "text/javascript" });
          worker = new Worker(URL.createObjectURL(blob));
        } else {
          let onmessage = ((postMessage) => {
            var __async2 = /* @__PURE__ */ __name((__this, __arguments, generator) => {
              return new Promise((resolve2, reject) => {
                var fulfilled = /* @__PURE__ */ __name((value) => {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }, "fulfilled");
                var rejected = /* @__PURE__ */ __name((value) => {
                  try {
                    step(generator.throw(value));
                  } catch (e) {
                    reject(e);
                  }
                }, "rejected");
                var step = /* @__PURE__ */ __name((x) => x.done ? resolve2(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
                step((generator = generator.apply(__this, __arguments)).next());
              });
            }, "__async");
            let onmessage2;
            let globalThis = {};
            for (let o = self; o; o = Object.getPrototypeOf(o))
              for (let k of Object.getOwnPropertyNames(o))
                if (!(k in globalThis))
                  Object.defineProperty(globalThis, k, { get: /* @__PURE__ */ __name(() => self[k], "get") });
            "use strict";
            (() => {
              const enosys = /* @__PURE__ */ __name(() => {
                const err = new Error("not implemented");
                err.code = "ENOSYS";
                return err;
              }, "enosys");
              if (!globalThis.fs) {
                let outputBuf = "";
                globalThis.fs = {
                  constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
                  // unused
                  writeSync(fd, buf) {
                    outputBuf += decoder.decode(buf);
                    const nl = outputBuf.lastIndexOf("\n");
                    if (nl != -1) {
                      console.log(outputBuf.substring(0, nl));
                      outputBuf = outputBuf.substring(nl + 1);
                    }
                    return buf.length;
                  },
                  write(fd, buf, offset, length, position, callback) {
                    if (offset !== 0 || length !== buf.length || position !== null) {
                      callback(enosys());
                      return;
                    }
                    const n = this.writeSync(fd, buf);
                    callback(null, n);
                  },
                  chmod(path, mode, callback) {
                    callback(enosys());
                  },
                  chown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  close(fd, callback) {
                    callback(enosys());
                  },
                  fchmod(fd, mode, callback) {
                    callback(enosys());
                  },
                  fchown(fd, uid, gid, callback) {
                    callback(enosys());
                  },
                  fstat(fd, callback) {
                    callback(enosys());
                  },
                  fsync(fd, callback) {
                    callback(null);
                  },
                  ftruncate(fd, length, callback) {
                    callback(enosys());
                  },
                  lchown(path, uid, gid, callback) {
                    callback(enosys());
                  },
                  link(path, link, callback) {
                    callback(enosys());
                  },
                  lstat(path, callback) {
                    callback(enosys());
                  },
                  mkdir(path, perm, callback) {
                    callback(enosys());
                  },
                  open(path, flags, mode, callback) {
                    callback(enosys());
                  },
                  read(fd, buffer, offset, length, position, callback) {
                    callback(enosys());
                  },
                  readdir(path, callback) {
                    callback(enosys());
                  },
                  readlink(path, callback) {
                    callback(enosys());
                  },
                  rename(from, to, callback) {
                    callback(enosys());
                  },
                  rmdir(path, callback) {
                    callback(enosys());
                  },
                  stat(path, callback) {
                    callback(enosys());
                  },
                  symlink(path, link, callback) {
                    callback(enosys());
                  },
                  truncate(path, length, callback) {
                    callback(enosys());
                  },
                  unlink(path, callback) {
                    callback(enosys());
                  },
                  utimes(path, atime, mtime, callback) {
                    callback(enosys());
                  }
                };
              }
              if (!globalThis.process) {
                globalThis.process = {
                  getuid() {
                    return -1;
                  },
                  getgid() {
                    return -1;
                  },
                  geteuid() {
                    return -1;
                  },
                  getegid() {
                    return -1;
                  },
                  getgroups() {
                    throw enosys();
                  },
                  pid: -1,
                  ppid: -1,
                  umask() {
                    throw enosys();
                  },
                  cwd() {
                    throw enosys();
                  },
                  chdir() {
                    throw enosys();
                  }
                };
              }
              if (!globalThis.crypto) {
                throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
              }
              if (!globalThis.performance) {
                throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
              }
              if (!globalThis.TextEncoder) {
                throw new Error("globalThis.TextEncoder is not available, polyfill required");
              }
              if (!globalThis.TextDecoder) {
                throw new Error("globalThis.TextDecoder is not available, polyfill required");
              }
              const encoder = new TextEncoder("utf-8");
              const decoder = new TextDecoder("utf-8");
              globalThis.Go = class {
                constructor() {
                  this.argv = ["js"];
                  this.env = {};
                  this.exit = (code) => {
                    if (code !== 0) {
                      console.warn("exit code:", code);
                    }
                  };
                  this._exitPromise = new Promise((resolve2) => {
                    this._resolveExitPromise = resolve2;
                  });
                  this._pendingEvent = null;
                  this._scheduledTimeouts = /* @__PURE__ */ new Map();
                  this._nextCallbackTimeoutID = 1;
                  const setInt64 = /* @__PURE__ */ __name((addr, v) => {
                    this.mem.setUint32(addr + 0, v, true);
                    this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
                  }, "setInt64");
                  const setInt32 = /* @__PURE__ */ __name((addr, v) => {
                    this.mem.setUint32(addr + 0, v, true);
                  }, "setInt32");
                  const getInt64 = /* @__PURE__ */ __name((addr) => {
                    const low = this.mem.getUint32(addr + 0, true);
                    const high = this.mem.getInt32(addr + 4, true);
                    return low + high * 4294967296;
                  }, "getInt64");
                  const loadValue = /* @__PURE__ */ __name((addr) => {
                    const f = this.mem.getFloat64(addr, true);
                    if (f === 0) {
                      return void 0;
                    }
                    if (!isNaN(f)) {
                      return f;
                    }
                    const id = this.mem.getUint32(addr, true);
                    return this._values[id];
                  }, "loadValue");
                  const storeValue = /* @__PURE__ */ __name((addr, v) => {
                    const nanHead = 2146959360;
                    if (typeof v === "number" && v !== 0) {
                      if (isNaN(v)) {
                        this.mem.setUint32(addr + 4, nanHead, true);
                        this.mem.setUint32(addr, 0, true);
                        return;
                      }
                      this.mem.setFloat64(addr, v, true);
                      return;
                    }
                    if (v === void 0) {
                      this.mem.setFloat64(addr, 0, true);
                      return;
                    }
                    let id = this._ids.get(v);
                    if (id === void 0) {
                      id = this._idPool.pop();
                      if (id === void 0) {
                        id = this._values.length;
                      }
                      this._values[id] = v;
                      this._goRefCounts[id] = 0;
                      this._ids.set(v, id);
                    }
                    this._goRefCounts[id]++;
                    let typeFlag = 0;
                    switch (typeof v) {
                      case "object":
                        if (v !== null) {
                          typeFlag = 1;
                        }
                        break;
                      case "string":
                        typeFlag = 2;
                        break;
                      case "symbol":
                        typeFlag = 3;
                        break;
                      case "function":
                        typeFlag = 4;
                        break;
                    }
                    this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
                    this.mem.setUint32(addr, id, true);
                  }, "storeValue");
                  const loadSlice = /* @__PURE__ */ __name((addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return new Uint8Array(this._inst.exports.mem.buffer, array, len);
                  }, "loadSlice");
                  const loadSliceOfValues = /* @__PURE__ */ __name((addr) => {
                    const array = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    const a = new Array(len);
                    for (let i = 0; i < len; i++) {
                      a[i] = loadValue(array + i * 8);
                    }
                    return a;
                  }, "loadSliceOfValues");
                  const loadString = /* @__PURE__ */ __name((addr) => {
                    const saddr = getInt64(addr + 0);
                    const len = getInt64(addr + 8);
                    return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
                  }, "loadString");
                  const timeOrigin = Date.now() - performance.now();
                  this.importObject = {
                    _gotest: {
                      add: /* @__PURE__ */ __name((a, b) => a + b, "add")
                    },
                    gojs: {
                      // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                      // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                      // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                      // This changes the SP, thus we have to update the SP used by the imported function.
                      // func wasmExit(code int32)
                      "runtime.wasmExit": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const code = this.mem.getInt32(sp + 8, true);
                        this.exited = true;
                        delete this._inst;
                        delete this._values;
                        delete this._goRefCounts;
                        delete this._ids;
                        delete this._idPool;
                        this.exit(code);
                      }, "runtime.wasmExit"),
                      // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                      "runtime.wasmWrite": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const fd = getInt64(sp + 8);
                        const p = getInt64(sp + 16);
                        const n = this.mem.getInt32(sp + 24, true);
                        globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                      }, "runtime.wasmWrite"),
                      // func resetMemoryDataView()
                      "runtime.resetMemoryDataView": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        this.mem = new DataView(this._inst.exports.mem.buffer);
                      }, "runtime.resetMemoryDataView"),
                      // func nanotime1() int64
                      "runtime.nanotime1": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                      }, "runtime.nanotime1"),
                      // func walltime() (sec int64, nsec int32)
                      "runtime.walltime": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const msec = (/* @__PURE__ */ new Date()).getTime();
                        setInt64(sp + 8, msec / 1e3);
                        this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                      }, "runtime.walltime"),
                      // func scheduleTimeoutEvent(delay int64) int32
                      "runtime.scheduleTimeoutEvent": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const id = this._nextCallbackTimeoutID;
                        this._nextCallbackTimeoutID++;
                        this._scheduledTimeouts.set(id, setTimeout(
                          () => {
                            this._resume();
                            while (this._scheduledTimeouts.has(id)) {
                              console.warn("scheduleTimeoutEvent: missed timeout event");
                              this._resume();
                            }
                          },
                          getInt64(sp + 8)
                        ));
                        this.mem.setInt32(sp + 16, id, true);
                      }, "runtime.scheduleTimeoutEvent"),
                      // func clearTimeoutEvent(id int32)
                      "runtime.clearTimeoutEvent": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const id = this.mem.getInt32(sp + 8, true);
                        clearTimeout(this._scheduledTimeouts.get(id));
                        this._scheduledTimeouts.delete(id);
                      }, "runtime.clearTimeoutEvent"),
                      // func getRandomData(r []byte)
                      "runtime.getRandomData": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        crypto.getRandomValues(loadSlice(sp + 8));
                      }, "runtime.getRandomData"),
                      // func finalizeRef(v ref)
                      "syscall/js.finalizeRef": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const id = this.mem.getUint32(sp + 8, true);
                        this._goRefCounts[id]--;
                        if (this._goRefCounts[id] === 0) {
                          const v = this._values[id];
                          this._values[id] = null;
                          this._ids.delete(v);
                          this._idPool.push(id);
                        }
                      }, "syscall/js.finalizeRef"),
                      // func stringVal(value string) ref
                      "syscall/js.stringVal": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, loadString(sp + 8));
                      }, "syscall/js.stringVal"),
                      // func valueGet(v ref, p string) ref
                      "syscall/js.valueGet": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                        sp = this._inst.exports.getsp() >>> 0;
                        storeValue(sp + 32, result);
                      }, "syscall/js.valueGet"),
                      // func valueSet(v ref, p string, x ref)
                      "syscall/js.valueSet": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                      }, "syscall/js.valueSet"),
                      // func valueDelete(v ref, p string)
                      "syscall/js.valueDelete": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                      }, "syscall/js.valueDelete"),
                      // func valueIndex(v ref, i int) ref
                      "syscall/js.valueIndex": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                      }, "syscall/js.valueIndex"),
                      // valueSetIndex(v ref, i int, x ref)
                      "syscall/js.valueSetIndex": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                      }, "syscall/js.valueSetIndex"),
                      // func valueCall(v ref, m string, args []ref) (ref, bool)
                      "syscall/js.valueCall": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const m = Reflect.get(v, loadString(sp + 16));
                          const args = loadSliceOfValues(sp + 32);
                          const result = Reflect.apply(m, v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, result);
                          this.mem.setUint8(sp + 64, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 56, err);
                          this.mem.setUint8(sp + 64, 0);
                        }
                      }, "syscall/js.valueCall"),
                      // func valueInvoke(v ref, args []ref) (ref, bool)
                      "syscall/js.valueInvoke": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.apply(v, void 0, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      }, "syscall/js.valueInvoke"),
                      // func valueNew(v ref, args []ref) (ref, bool)
                      "syscall/js.valueNew": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        try {
                          const v = loadValue(sp + 8);
                          const args = loadSliceOfValues(sp + 16);
                          const result = Reflect.construct(v, args);
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, result);
                          this.mem.setUint8(sp + 48, 1);
                        } catch (err) {
                          sp = this._inst.exports.getsp() >>> 0;
                          storeValue(sp + 40, err);
                          this.mem.setUint8(sp + 48, 0);
                        }
                      }, "syscall/js.valueNew"),
                      // func valueLength(v ref) int
                      "syscall/js.valueLength": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                      }, "syscall/js.valueLength"),
                      // valuePrepareString(v ref) (ref, int)
                      "syscall/js.valuePrepareString": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const str = encoder.encode(String(loadValue(sp + 8)));
                        storeValue(sp + 16, str);
                        setInt64(sp + 24, str.length);
                      }, "syscall/js.valuePrepareString"),
                      // valueLoadString(v ref, b []byte)
                      "syscall/js.valueLoadString": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const str = loadValue(sp + 8);
                        loadSlice(sp + 16).set(str);
                      }, "syscall/js.valueLoadString"),
                      // func valueInstanceOf(v ref, t ref) bool
                      "syscall/js.valueInstanceOf": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                      }, "syscall/js.valueInstanceOf"),
                      // func copyBytesToGo(dst []byte, src ref) (int, bool)
                      "syscall/js.copyBytesToGo": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const dst = loadSlice(sp + 8);
                        const src = loadValue(sp + 32);
                        if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      }, "syscall/js.copyBytesToGo"),
                      // func copyBytesToJS(dst ref, src []byte) (int, bool)
                      "syscall/js.copyBytesToJS": /* @__PURE__ */ __name((sp) => {
                        sp >>>= 0;
                        const dst = loadValue(sp + 8);
                        const src = loadSlice(sp + 16);
                        if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                          this.mem.setUint8(sp + 48, 0);
                          return;
                        }
                        const toCopy = src.subarray(0, dst.length);
                        dst.set(toCopy);
                        setInt64(sp + 40, toCopy.length);
                        this.mem.setUint8(sp + 48, 1);
                      }, "syscall/js.copyBytesToJS"),
                      "debug": /* @__PURE__ */ __name((value) => {
                        console.log(value);
                      }, "debug")
                    }
                  };
                }
                run(instance) {
                  return __async2(this, null, function* () {
                    if (!(instance instanceof WebAssembly.Instance)) {
                      throw new Error("Go.run: WebAssembly.Instance expected");
                    }
                    this._inst = instance;
                    this.mem = new DataView(this._inst.exports.mem.buffer);
                    this._values = [
                      // JS values that Go currently has references to, indexed by reference id
                      NaN,
                      0,
                      null,
                      true,
                      false,
                      globalThis,
                      this
                    ];
                    this._goRefCounts = new Array(this._values.length).fill(Infinity);
                    this._ids = /* @__PURE__ */ new Map([
                      // mapping from JS values to reference ids
                      [0, 1],
                      [null, 2],
                      [true, 3],
                      [false, 4],
                      [globalThis, 5],
                      [this, 6]
                    ]);
                    this._idPool = [];
                    this.exited = false;
                    let offset = 4096;
                    const strPtr = /* @__PURE__ */ __name((str) => {
                      const ptr = offset;
                      const bytes = encoder.encode(str + "\0");
                      new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                      offset += bytes.length;
                      if (offset % 8 !== 0) {
                        offset += 8 - offset % 8;
                      }
                      return ptr;
                    }, "strPtr");
                    const argc = this.argv.length;
                    const argvPtrs = [];
                    this.argv.forEach((arg) => {
                      argvPtrs.push(strPtr(arg));
                    });
                    argvPtrs.push(0);
                    const keys = Object.keys(this.env).sort();
                    keys.forEach((key) => {
                      argvPtrs.push(strPtr(`${key}=${this.env[key]}`));
                    });
                    argvPtrs.push(0);
                    const argv = offset;
                    argvPtrs.forEach((ptr) => {
                      this.mem.setUint32(offset, ptr, true);
                      this.mem.setUint32(offset + 4, 0, true);
                      offset += 8;
                    });
                    const wasmMinDataAddr = 4096 + 8192;
                    if (offset >= wasmMinDataAddr) {
                      throw new Error("total length of command line and environment variables exceeds limit");
                    }
                    this._inst.exports.run(argc, argv);
                    if (this.exited) {
                      this._resolveExitPromise();
                    }
                    yield this._exitPromise;
                  });
                }
                _resume() {
                  if (this.exited) {
                    throw new Error("Go program has already exited");
                  }
                  this._inst.exports.resume();
                  if (this.exited) {
                    this._resolveExitPromise();
                  }
                }
                _makeFuncWrapper(id) {
                  const go2 = this;
                  return function() {
                    const event = { id, this: this, args: arguments };
                    go2._pendingEvent = event;
                    go2._resume();
                    return event.result;
                  };
                }
              };
            })();
            onmessage2 = /* @__PURE__ */ __name(({ data: wasm }) => {
              let decoder = new TextDecoder();
              let fs = globalThis.fs;
              let stderr = "";
              fs.writeSync = (fd, buffer) => {
                if (fd === 1) {
                  postMessage(buffer);
                } else if (fd === 2) {
                  stderr += decoder.decode(buffer);
                  let parts = stderr.split("\n");
                  if (parts.length > 1) console.log(parts.slice(0, -1).join("\n"));
                  stderr = parts[parts.length - 1];
                } else {
                  throw new Error("Bad write");
                }
                return buffer.length;
              };
              let stdin = [];
              let resumeStdin;
              let stdinPos = 0;
              onmessage2 = /* @__PURE__ */ __name(({ data }) => {
                if (data.length > 0) {
                  stdin.push(data);
                  if (resumeStdin) resumeStdin();
                }
                return go2;
              }, "onmessage");
              fs.read = (fd, buffer, offset, length, position, callback) => {
                if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
                  throw new Error("Bad read");
                }
                if (stdin.length === 0) {
                  resumeStdin = /* @__PURE__ */ __name(() => fs.read(fd, buffer, offset, length, position, callback), "resumeStdin");
                  return;
                }
                let first = stdin[0];
                let count = Math.max(0, Math.min(length, first.length - stdinPos));
                buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
                stdinPos += count;
                if (stdinPos === first.length) {
                  stdin.shift();
                  stdinPos = 0;
                }
                callback(null, count);
              };
              let go2 = new globalThis.Go();
              go2.argv = ["", `--service=${"0.23.0"}`];
              tryToInstantiateModule(wasm, go2).then(
                (instance) => {
                  postMessage(null);
                  go2.run(instance);
                },
                (error) => {
                  postMessage(error);
                }
              );
              return go2;
            }, "onmessage");
            function tryToInstantiateModule(wasm, go2) {
              return __async2(this, null, function* () {
                if (wasm instanceof WebAssembly.Module) {
                  return WebAssembly.instantiate(wasm, go2.importObject);
                }
                const res = yield fetch(wasm);
                if (!res.ok) throw new Error(`Failed to download ${JSON.stringify(wasm)}`);
                if ("instantiateStreaming" in WebAssembly && /^application\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
                  const result2 = yield WebAssembly.instantiateStreaming(res, go2.importObject);
                  return result2.instance;
                }
                const bytes = yield res.arrayBuffer();
                const result = yield WebAssembly.instantiate(bytes, go2.importObject);
                return result.instance;
              });
            }
            __name(tryToInstantiateModule, "tryToInstantiateModule");
            return (m) => onmessage2(m);
          })((data) => worker.onmessage({ data }));
          let go;
          worker = {
            onmessage: null,
            postMessage: /* @__PURE__ */ __name((data) => setTimeout(() => go = onmessage({ data })), "postMessage"),
            terminate() {
              if (go)
                for (let timeout of go._scheduledTimeouts.values())
                  clearTimeout(timeout);
            }
          };
        }
        let firstMessageResolve;
        let firstMessageReject;
        const firstMessagePromise = new Promise((resolve2, reject) => {
          firstMessageResolve = resolve2;
          firstMessageReject = reject;
        });
        worker.onmessage = ({ data: error }) => {
          worker.onmessage = ({ data }) => readFromStdout(data);
          if (error) firstMessageReject(error);
          else firstMessageResolve();
        };
        worker.postMessage(wasmModule || new URL(wasmURL, location.href).toString());
        let { readFromStdout, service } = createChannel({
          writeToStdin(bytes) {
            worker.postMessage(bytes);
          },
          isSync: false,
          hasFS: false,
          esbuild: browser_exports
        });
        yield firstMessagePromise;
        stopService = /* @__PURE__ */ __name(() => {
          worker.terminate();
          initializePromise = void 0;
          stopService = void 0;
          longLivedService = void 0;
        }, "stopService");
        longLivedService = {
          build: /* @__PURE__ */ __name((options) => new Promise((resolve2, reject) => service.buildOrContext({
            callName: "build",
            refs: null,
            options,
            isTTY: false,
            defaultWD: "/",
            callback: /* @__PURE__ */ __name((err, res) => err ? reject(err) : resolve2(res), "callback")
          })), "build"),
          context: /* @__PURE__ */ __name((options) => new Promise((resolve2, reject) => service.buildOrContext({
            callName: "context",
            refs: null,
            options,
            isTTY: false,
            defaultWD: "/",
            callback: /* @__PURE__ */ __name((err, res) => err ? reject(err) : resolve2(res), "callback")
          })), "context"),
          transform: /* @__PURE__ */ __name((input, options) => new Promise((resolve2, reject) => service.transform({
            callName: "transform",
            refs: null,
            input,
            options: options || {},
            isTTY: false,
            fs: {
              readFile(_, callback) {
                callback(new Error("Internal error"), null);
              },
              writeFile(_, callback) {
                callback(null);
              }
            },
            callback: /* @__PURE__ */ __name((err, res) => err ? reject(err) : resolve2(res), "callback")
          })), "transform"),
          formatMessages: /* @__PURE__ */ __name((messages, options) => new Promise((resolve2, reject) => service.formatMessages({
            callName: "formatMessages",
            refs: null,
            messages,
            options,
            callback: /* @__PURE__ */ __name((err, res) => err ? reject(err) : resolve2(res), "callback")
          })), "formatMessages"),
          analyzeMetafile: /* @__PURE__ */ __name((metafile, options) => new Promise((resolve2, reject) => service.analyzeMetafile({
            callName: "analyzeMetafile",
            refs: null,
            metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
            options,
            callback: /* @__PURE__ */ __name((err, res) => err ? reject(err) : resolve2(res), "callback")
          })), "analyzeMetafile")
        };
      }), "startRunningService");
      var browser_default = browser_exports;
    })(typeof module === "object" ? module : { set exports(x) {
      (typeof self !== "undefined" ? self : this).esbuild = x;
    } });
  }
});

// src/servers/lib/npm.ts
var npm_exports2 = {};
__export(npm_exports2, {
  getPackage: () => getPackage,
  getPackageInfo: () => getPackageInfo,
  installPackage: () => installPackage,
  main: () => main,
  require: () => require2
});

// src/servers/home/npm.ts
var npm_exports = {};
__export(npm_exports, {
  getPackage: () => getPackage,
  getPackageInfo: () => getPackageInfo,
  installPackage: () => installPackage,
  main: () => main,
  require: () => require2
});

// src/lib/FileSystem.ts
var ALLOWED_FILETYPES = [
  "js",
  "txt",
  "json"
];

// src/lib/npm/ApiWrapper.ts
var import_js_untar = __toESM(require_untar());
var API_URL = "https://registry.npmjs.org";
async function getPackageInfo(node_package, version = "latest") {
  const response = await fetch(`${API_URL}/${node_package}/${version}`);
  if (response.ok) {
    return response.json();
  }
  throw { status: response.status, error: await response.text() };
}
__name(getPackageInfo, "getPackageInfo");
async function getPackage(package_info) {
  const response = await fetch(package_info.dist.tarball);
  if (!response.ok) {
    throw { status: response.status, error: "Failed to download tarball" };
  }
  const blob = await response.blob();
  const stream = blob.stream().pipeThrough(new DecompressionStream("gzip"));
  const reader = stream.getReader();
  const bytes = [];
  while (true) {
    const { done, value: chunk } = await reader.read();
    if (done) break;
    bytes.push(...chunk);
  }
  const buffer = new Uint8Array(bytes.length);
  buffer.set(bytes);
  const files = await (0, import_js_untar.default)(buffer.buffer);
  return files.map((file) => (file.name = file.name.replace(/.[cm]js$/, ".js"), file)).filter(({ name }) => ALLOWED_FILETYPES.some((type) => name.endsWith(`.${type}`))).map(({ name, buffer: buffer2 }) => ({
    name: name.replace(/^package\//, ""),
    content: new TextDecoder().decode(buffer2)
  }));
}
__name(getPackage, "getPackage");

// src/lib/exploit/WebpackRequire.js
function getRequire() {
  const chunk = webpackChunkbitburner;
  if (!chunk.some((m) => m.some((i) => i[0] == -1))) {
    let requireCache;
    chunk.push([[-1], {}, (r) => (requireCache = requireCache ?? r, requireCache)]);
  }
  return chunk.find((m) => m.some((i) => i[0] == -1))[2]();
}
__name(getRequire, "getRequire");

// src/lib/exploit/Internals.ts
function GetServer(hostname) {
  return getRequire()(97467)["WT"](hostname);
}
__name(GetServer, "GetServer");

// src/lib/npm/Require.ts
var import_esbuild_wasm = __toESM(require_browser());
await import_esbuild_wasm.default.initialize({
  // wasmURL: esbuild_wasm_dataurl,
  wasmURL: "https://www.unpkg.com/esbuild-wasm@0.23.0/esbuild.wasm",
  worker: true
});
var PACKAGE_DIR = "node_modules";
var ResolvePlugin = {
  name: "ResolvePlugin",
  setup(pluginBuild) {
    pluginBuild.onResolve({ filter: /.*/ }, (opts) => {
      const [, cwd] = opts.path.split(/(.*)\//);
      console.log(opts, { cwd });
      return {
        path: resolve(opts.path, cwd),
        namespace: "bitburner"
      };
    });
    pluginBuild.onLoad({ namespace: "bitburner", filter: /.*/ }, (opts) => {
      return {
        contents: load(opts.path)
      };
    });
  }
};
require2.__cache = /* @__PURE__ */ new Map();
async function require2(path, cwd = `${PACKAGE_DIR}/${path}`) {
  const chacheHit = require2.__cache.get(relativePathToAbsolute(path, cwd));
  if (chacheHit) return chacheHit;
  const { outputFiles: { 0: { contents: buffer } } } = await import_esbuild_wasm.default.build({
    entryPoints: [path],
    plugins: [ResolvePlugin],
    write: false,
    bundle: true,
    platform: "browser",
    format: "cjs",
    minify: true,
    keepNames: true,
    legalComments: "none",
    logLevel: "debug"
  });
  const moduleCode = new TextDecoder().decode(buffer);
  const module = compile(moduleCode);
  require2.__cache.set(path, module);
  return module;
}
__name(require2, "require");
resolve.__cache = /* @__PURE__ */ new Map();
function resolve(path, cwd) {
  console.log(`RESOLVE: ${path}`, { path, cwd });
  const chacheHit = resolve.__cache.get(relativePathToAbsolute(path, cwd));
  if (chacheHit) return chacheHit;
  const entrypoint = resolveRelative(path, cwd) ?? //try to resolve as path
  resolveAlias(path, cwd) ?? //try to import as aliased module
  resolveModule(path);
  if (!entrypoint) throw new Error(`Could not resolve ${path} from ${cwd}`);
  resolve.__cache.set(relativePathToAbsolute(path, cwd), entrypoint);
  return entrypoint;
}
__name(resolve, "resolve");
function resolveRelative(path, cwd) {
  if (!["/", "./", "../"].some((prefix) => path.startsWith(prefix))) return null;
  return relativePathToAbsolute(path, cwd);
}
__name(resolveRelative, "resolveRelative");
function resolveAlias(path, cwd) {
  if (!path.startsWith("#")) return null;
  const { imports, name } = findPackageJson(cwd);
  if (!imports) return null;
  if (imports[path]) {
    const browserVariant = getBrowserVariant(imports[path]);
    if (!browserVariant) return null;
    console.log({ browserVariant, cwd });
    return relativePathToAbsolute(browserVariant, `${PACKAGE_DIR}/${name}`);
  }
  ;
  const alias = matchExportPattern(path, imports);
  if (!alias) return null;
  return relativePathToAbsolute(alias, cwd);
}
__name(resolveAlias, "resolveAlias");
function resolveModule(path) {
  const [module, submodule] = path.split(/\/(.*)/);
  console.log({ module, submodule });
  const modulePath = `${PACKAGE_DIR}/${module}`;
  const { exports, main: main2, browser } = JSON.parse(load(`${modulePath}/package.json`));
  if (!exports) return relativePathToAbsolute(`./${browser ?? main2}`, modulePath);
  if (typeof exports == "string") return relativePathToAbsolute(`./${exports}`, modulePath);
  if (!submodule) {
    const browserVariant = getBrowserVariant(exports["."]);
    if (!browserVariant) return null;
    console.log({ browserVariant, modulePath });
    return relativePathToAbsolute(browserVariant, modulePath);
  }
  ;
  return null;
}
__name(resolveModule, "resolveModule");
function load(path) {
  const contentFile = GetServer("home").getContentFile(path.replace(/\.[cm]js$/, ".js"));
  if (!contentFile) throw new Error("Could not load file: " + path);
  return contentFile.content;
}
__name(load, "load");
function compile(content) {
  const module = { exports: {} };
  const moduleAsFunction = new Function("require", "module", "exports", `${content};return exports`);
  const exports = moduleAsFunction(
    () => {
      throw new Error("Dynamic Require is not supported");
    },
    module,
    {}
  );
  return Object.keys(exports).length ? exports : module.exports;
}
__name(compile, "compile");
function matchExportPattern(path, patterns) {
  return Object.keys(patterns).reduce((prev, cur) => {
    const [prefix, suffix] = cur.split("*");
    if (path.startsWith(prefix) && path.endsWith(suffix)) {
      const replacer = path.replace(prefix, "").replace(suffix, "");
      const alias = getBrowserVariant(patterns[cur]);
      if (!alias) return prev;
      return alias.replace("*", replacer);
    }
    return prev;
  }, null);
}
__name(matchExportPattern, "matchExportPattern");
function findPackageJson(path) {
  const fragments = path.split("/");
  while (fragments.length) {
    try {
      const packageJson = load(`${fragments.join("/")}/package.json`);
      return JSON.parse(packageJson);
    } catch {
    }
    fragments.pop();
  }
  throw new Error("Could not find package.json: " + path);
}
__name(findPackageJson, "findPackageJson");
function getBrowserVariant(alias) {
  if (alias && typeof alias == "string")
    return alias;
  else if (alias && typeof alias != "string") {
    const browserVariant = alias.browser ?? alias.default;
    if (typeof browserVariant == "string") return browserVariant;
    return browserVariant.require ?? browserVariant.default;
  }
  return null;
}
__name(getBrowserVariant, "getBrowserVariant");
function relativePathToAbsolute(path, cwd) {
  const fragments = `${path.startsWith("./") ? cwd : ""}/${path}`.split("/").filter((f) => f != "" && f != ".");
  const absolute = [];
  let skipCount = 0;
  for (let i = fragments.length - 1; i >= 0; i--) {
    const fragment = fragments[i];
    if (fragment == ".." && fragments[i - 1] == "..") {
      skipCount++;
      continue;
    }
    if (fragment == ".." && fragments[i - 1] != "..") {
      i -= skipCount + 1;
      skipCount = 0;
      continue;
    }
    absolute.unshift(fragment);
  }
  return absolute.join("/");
}
__name(relativePathToAbsolute, "relativePathToAbsolute");

// src/lib/npm/cli.ts
var Commands = {
  i(ns, ...input) {
    return this.install(ns, ...input);
  },
  ci(ns, ...input) {
    return this.install(ns, ...input);
  },
  async install(ns, ...input) {
    const [requestedPackage] = input;
    if (typeof requestedPackage != "string") {
      ns.tprint(`Error: expected package name to be string but was ${typeof requestedPackage}`);
      return;
    }
    const [packageName, packageVersion] = requestedPackage.split("@");
    const packageInfo = await getPackageInfo(packageName, packageVersion).catch(({ error }) => {
      ns.tprint(error);
    });
    if (!packageInfo) return;
    return installPackage(ns, packageInfo);
  },
  r(ns, ...input) {
    return this.remove(ns, ...input);
  },
  remove(ns, ...input) {
    throw new Error("Function not implemented.");
  },
  outdated(ns, ...input) {
    throw new Error("Function not implemented.");
  },
  update(ns, ...input) {
    throw new Error("Function not implemented.");
  },
  help(ns, ...input) {
    throw new Error("Function not implemented.");
  }
};
async function installPackage(ns, packageInfo, visited = []) {
  if (visited.includes(packageInfo.name)) return;
  const files = await getPackage(packageInfo);
  for (const { name, content } of files) {
    ns.write(`${PACKAGE_DIR}/${packageInfo.name}/${name}`, content, "w");
  }
  visited.push(packageInfo.name);
  await Promise.all(
    Object.keys(packageInfo.dependencies ?? {}).map(async (dep) => installPackage(ns, await getPackageInfo(dep), visited))
  );
}
__name(installPackage, "installPackage");

// src/servers/home/npm.ts
__reExport(npm_exports, __toESM(require_browser()));
async function main(ns) {
  console.clear();
  const [command, ...input] = ns.args.filter(([a]) => a != "-");
  if (!(command in Commands)) {
    ns.tprint(`Invalid command: ${command}`);
    return;
  }
  return Commands[command](ns, ...input).catch((e) => {
    ns.tprint("Something went unexpectedly wrong, sorry :(");
    console.error(e);
  }).finally(() => ns.tprint("Done"));
}
__name(main, "main");

// src/servers/lib/npm.ts
__reExport(npm_exports2, npm_exports);
export {
  getPackage,
  getPackageInfo,
  installPackage,
  main,
  require2 as require
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2pzLXVudGFyL2J1aWxkL2Rpc3QvdW50YXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2VzYnVpbGQtd2FzbS9saWIvYnJvd3Nlci5qcyIsICIuLi8uLi9zcmMvc2VydmVycy9saWIvbnBtLnRzIiwgIi4uLy4uL3NyYy9zZXJ2ZXJzL2hvbWUvbnBtLnRzIiwgIi4uLy4uL3NyYy9saWIvRmlsZVN5c3RlbS50cyIsICIuLi8uLi9zcmMvbGliL25wbS9BcGlXcmFwcGVyLnRzIiwgIi4uLy4uL3NyYy9saWIvZXhwbG9pdC9XZWJwYWNrUmVxdWlyZS5qcyIsICIuLi8uLi9zcmMvbGliL2V4cGxvaXQvSW50ZXJuYWxzLnRzIiwgIi4uLy4uL3NyYy9saWIvbnBtL1JlcXVpcmUudHMiLCAiLi4vLi4vc3JjL2xpYi9ucG0vY2xpLnRzIl0sCiAgInNvdXJjZVJvb3QiOiAiLyIsCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxvQkFBWSxPQUFPLFVBQVEsT0FBTyxNQUFJLE9BQU8sQ0FBQyxHQUFFLENBQUMsSUFBRSxZQUFVLE9BQU8sVUFBUSxPQUFPLFVBQVEsRUFBRSxJQUFFLEVBQUUsUUFBTSxFQUFFO0FBQUEsSUFBQyxFQUFFLFNBQUssV0FBVTtBQUFDO0FBQWEsZUFBUyxFQUFFQSxJQUFFO0FBQUMsaUJBQVNDLEdBQUVELElBQUU7QUFBQyxtQkFBUUMsS0FBRSxHQUFFQyxLQUFFQyxHQUFFLFFBQU9GLEtBQUVDLElBQUUsRUFBRUQsR0FBRSxDQUFBRSxHQUFFRixFQUFDLEVBQUVELEVBQUM7QUFBRSxVQUFBSSxHQUFFLEtBQUtKLEVBQUM7QUFBQSxRQUFDO0FBQXJELGVBQUFDLElBQUE7QUFBc0QsWUFBRyxjQUFZLE9BQU8sUUFBUSxPQUFNLElBQUksTUFBTSwyREFBMkQ7QUFBRSxZQUFJRSxLQUFFLENB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TSxJQUFJLE1BQU0sMkJBQTJCO0FBQUEsRUFDN0M7QUFBQSxFQUNBLEtBQUssT0FBTyxPQUFPO0FBQ2pCLFVBQU0sSUFBSSxNQUFNLDJCQUEyQjtBQUFBLEVBQzdDO0FBQ0Y7QUFFQSxlQUFzQixlQUFlLElBQVEsYUFBMEIsVUFBb0IsQ0FBQyxHQUFHO0FBQzdGLE1BQUksUUFBUSxTQUFTLFlBQVksSUFBSSxFQUFHO0FBRXhDLFFBQU0sUUFBUSxNQUFNLFdBQVcsV0FBVztBQUUxQyxhQUFXLEVBQUUsTUFBTSxRQUFRLEtBQUssT0FBTztBQUNyQyxPQUFHLE1BQU0sR0FBRyxXQUFXLElBQUksWUFBWSxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsR0FBRztBQUFBLEVBQ3JFO0FBRUEsVUFBUSxLQUFLLFlBQVksSUFBSTtBQUU3QixRQUFNLFFBQVE7QUFBQSxJQUFJLE9BQU8sS0FBSyxZQUFZLGdCQUFnQixDQUFDLENBQUMsRUFDekQsSUFBSSxPQUFNLFFBQVEsZUFBZSxJQUFJLE1BQU0sZUFBZSxHQUFHLEdBQUcsT0FBTyxDQUFFO0FBQUEsRUFDNUU7QUFFRjtBQWZzQjs7O0FOL0J0Qix3QkFBYztBQXJCZCxlQUFzQixLQUFLLElBQVE7QUFDakMsVUFBUSxNQUFNO0FBR2QsUUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLElBQUssR0FBRyxLQUFrQixPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHO0FBRTFFLE1BQUksRUFBRSxXQUFXLFdBQVc7QUFDMUIsT0FBRyxPQUFPLG9CQUFvQixPQUFPLEVBQUU7QUFDdkM7QUFBQSxFQUNGO0FBRUEsU0FBTyxTQUFTLE9BQU8sRUFBRSxJQUFJLEdBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNO0FBQ2xELE9BQUcsT0FBTyw2Q0FBNkM7QUFDdkQsWUFBUSxNQUFNLENBQUM7QUFBQSxFQUNqQixDQUFDLEVBQUUsUUFBUSxNQUFNLEdBQUcsT0FBTyxNQUFNLENBQUM7QUFFcEM7QUFoQnNCOzs7QURGdEIsV0FBQUMsY0FBYzsiLAogICJuYW1lcyI6IFsiZSIsICJyIiwgIm4iLCAidCIsICJhIiwgImkiLCAibyIsICJtb2R1bGUiLCAiX19kZWZQcm9wIiwgIl9fZ2V0T3duUHJvcERlc2MiLCAiX19nZXRPd25Qcm9wTmFtZXMiLCAiX19oYXNPd25Qcm9wIiwgIl9fZXhwb3J0IiwgIl9fY29weVByb3BzIiwgInJlc29sdmUiLCAiZGVmaW5lIiwgInJlc29sdmUyIiwgIl9fYXN5bmMiLCAib25tZXNzYWdlIiwgImdvIiwgIm5wbV9leHBvcnRzIiwgInJlcXVpcmUiLCAicmVxdWlyZSIsICJ1bnRhciIsICJidWZmZXIiLCAiZXNidWlsZCIsICJyZXF1aXJlIiwgIm1haW4iLCAibnBtX2V4cG9ydHMiXQp9Cg==
