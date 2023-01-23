//exports.helloWorld = () => {
//    console.log('hello world2')
//     console.log('hello world22')
//     console.log('hello world2222')
//    
//}
exports.anotherFunc = () => {
  console.log('another func')
  /**
 * Bundled by jsDelivr using Rollup v2.74.1 and Terser v5.15.1.
 * Original file: /npm/@supabase/realtime-js@2.3.1/dist/module/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{w3cwebsocket as e}from"/npm/websocket@1.0.34/+esm";const t={"X-Client-Info":"realtime-js/2.3.1"};var s,i,n,r,o,a,c;!function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"}(s||(s={})),function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"}(i||(i={})),function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"}(n||(n={})),function(e){e.websocket="websocket"}(r||(r={})),function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"}(o||(o={}));class h{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.tries=this.tries+1,this.callback()}),this.timerCalc(this.tries+1))}}class l{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t("string"==typeof e?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),s=new TextDecoder;return this._decodeBroadcast(e,t,s)}_decodeBroadcast(e,t,s){const i=t.getUint8(1),n=t.getUint8(2);let r=this.HEADER_LENGTH+2;const o=s.decode(e.slice(r,r+i));r+=i;const a=s.decode(e.slice(r,r+n));r+=n;return{ref:null,topic:o,event:a,payload:JSON.parse(s.decode(e.slice(r,e.byteLength)))}}}class u{constructor(e,t,s={},i=1e4){this.channel=e,this.event=t,this.payload=s,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null,this.rateLimited=!1}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){if(this._hasReceived("timeout"))return;this.startTimeout(),this.sent=!0;"rate limited"===this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()})&&(this.rateLimited=!0)}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var s;return this._hasReceived(e)&&t(null===(s=this.receivedResp)||void 0===s?void 0:s.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);this.channel._on(this.refEvent,{},(e=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=e,this._matchReceive(e)})),this.timeoutTimer=setTimeout((()=>{this.trigger("timeout",{})}),this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter((t=>t.status===e)).forEach((e=>e.callback(t)))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}!function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"}(a||(a={}));class d{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=(null==t?void 0:t.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},(e=>{const{onJoin:t,onLeave:s,onSync:i}=this.caller;this.joinRef=this.channel._joinRef(),this.state=d.syncState(this.state,e,t,s),this.pendingDiffs.forEach((e=>{this.state=d.syncDiff(this.state,e,t,s)})),this.pendingDiffs=[],i()})),this.channel._on(s.diff,{},(e=>{const{onJoin:t,onLeave:s,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(e):(this.state=d.syncDiff(this.state,e,t,s),i())})),this.onJoin(((e,t,s)=>{this.channel._trigger("presence",{event:"join",key:e,currentPresences:t,newPresences:s})})),this.onLeave(((e,t,s)=>{this.channel._trigger("presence",{event:"leave",key:e,currentPresences:t,leftPresences:s})})),this.onSync((()=>{this.channel._trigger("presence",{event:"sync"})}))}static syncState(e,t,s,i){const n=this.cloneDeep(e),r=this.transformState(t),o={},a={};return this.map(n,((e,t)=>{r[e]||(a[e]=t)})),this.map(r,((e,t)=>{const s=n[e];if(s){const i=t.map((e=>e.presence_ref)),n=s.map((e=>e.presence_ref)),r=t.filter((e=>n.indexOf(e.presence_ref)<0)),c=s.filter((e=>i.indexOf(e.presence_ref)<0));r.length>0&&(o[e]=r),c.length>0&&(a[e]=c)}else o[e]=t})),this.syncDiff(n,{joins:o,leaves:a},s,i)}static syncDiff(e,t,s,i){const{joins:n,leaves:r}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return s||(s=()=>{}),i||(i=()=>{}),this.map(n,((t,i)=>{var n;const r=null!==(n=e[t])&&void 0!==n?n:[];if(e[t]=this.cloneDeep(i),r.length>0){const s=e[t].map((e=>e.presence_ref)),i=r.filter((e=>s.indexOf(e.presence_ref)<0));e[t].unshift(...i)}s(t,r,i)})),this.map(r,((t,s)=>{let n=e[t];if(!n)return;const r=s.map((e=>e.presence_ref));n=n.filter((e=>r.indexOf(e.presence_ref)<0)),e[t]=n,i(t,n,s),0===n.length&&delete e[t]})),e}static map(e,t){return Object.getOwnPropertyNames(e).map((s=>t(s,e[s])))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce(((t,s)=>{const i=e[s];return t[s]="metas"in i?i.metas.map((e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))):i,t}),{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}!function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"}(c||(c={}));const f=(e,t,s={})=>{var i;const n=null!==(i=s.skipTypes)&&void 0!==i?i:[];return Object.keys(t).reduce(((s,i)=>(s[i]=p(i,e,t,n),s)),{})},p=(e,t,s,i)=>{const n=t.find((t=>t.name===e)),r=null==n?void 0:n.type,o=s[e];return r&&!i.includes(r)?m(r,o):g(o)},m=(e,t)=>{if("_"===e.charAt(0)){const s=e.slice(1,e.length);return y(t,s)}switch(e){case c.bool:return v(t);case c.float4:case c.float8:case c.int2:case c.int4:case c.int8:case c.numeric:case c.oid:return _(t);case c.json:case c.jsonb:return b(t);case c.timestamp:return E(t);case c.abstime:case c.date:case c.daterange:case c.int4range:case c.int8range:case c.money:case c.reltime:case c.text:case c.time:case c.timestamptz:case c.timetz:case c.tsrange:case c.tstzrange:default:return g(t)}},g=e=>e,v=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},_=e=>{if("string"==typeof e){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},b=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},y=(e,t)=>{if("string"!=typeof e)return e;const s=e.length-1,i=e[s];if("{"===e[0]&&"}"===i){let i;const n=e.slice(1,s);try{i=JSON.parse("["+n+"]")}catch(e){i=n?n.split(","):[]}return i.map((e=>m(t,e)))}return e},E=e=>"string"==typeof e?e.replace(" ","T"):e;var j,T,k,C=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};!function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"}(j||(j={})),function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes"}(T||(T={})),function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"}(k||(k={}));class R{constructor(e,t={config:{}},s){this.topic=e,this.params=t,this.socket=s,this.bindings={},this.state=i.closed,this.joinedOnce=!1,this.pushBuffer=[],this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""}},t.config),this.timeout=this.socket.timeout,this.joinPush=new u(this,n.join,this.params,this.timeout),this.rejoinTimer=new h((()=>this._rejoinUntilConnected()),this.socket.reconnectAfterMs),this.joinPush.receive("ok",(()=>{this.state=i.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach((e=>e.send())),this.pushBuffer=[]})),this._onClose((()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=i.closed,this.socket._remove(this)})),this._onError((e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,e),this.state=i.errored,this.rejoinTimer.scheduleTimeout())})),this.joinPush.receive("timeout",(()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=i.errored,this.rejoinTimer.scheduleTimeout())})),this._on(n.reply,{},((e,t)=>{this._trigger(this._replyEventName(t),e)})),this.presence=new d(this)}subscribe(e,t=this.timeout){var s,i;if(this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:n,presence:r}}=this.params;this._onError((t=>e&&e("CHANNEL_ERROR",t))),this._onClose((()=>e&&e("CLOSED")));const o={},a={broadcast:n,presence:r,postgres_changes:null!==(i=null===(s=this.bindings.postgres_changes)||void 0===s?void 0:s.map((e=>e.filter)))&&void 0!==i?i:[]};this.socket.accessToken&&(o.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:a},o)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",(({postgres_changes:t})=>{var s;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),void 0!==t){const i=this.bindings.postgres_changes,n=null!==(s=null==i?void 0:i.length)&&void 0!==s?s:0,r=[];for(let s=0;s<n;s++){const n=i[s],{filter:{event:o,schema:a,table:c,filter:h}}=n,l=t&&t[s];if(!l||l.event!==o||l.schema!==a||l.table!==c||l.filter!==h)return this.unsubscribe(),void(e&&e("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes")));r.push(Object.assign(Object.assign({},n),{id:l.id}))}return this.bindings.postgres_changes=r,void(e&&e("SUBSCRIBED"))}e&&e("SUBSCRIBED")})).receive("error",(t=>{e&&e("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(t).join(", ")||"error")))})).receive("timeout",(()=>{e&&e("TIMED_OUT")}))}return this}presenceState(){return this.presence.state}track(e,t={}){return C(this,void 0,void 0,(function*(){return yield this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}))}untrack(e={}){return C(this,void 0,void 0,(function*(){return yield this.send({type:"presence",event:"untrack"},e)}))}on(e,t,s){return this._on(e,t,s)}send(e,t={}){return new Promise((s=>{var i,n,r;const o=this._push(e.type,e,t.timeout||this.timeout);o.rateLimited&&s("rate limited"),"broadcast"!==e.type||(null===(r=null===(n=null===(i=this.params)||void 0===i?void 0:i.config)||void 0===n?void 0:n.broadcast)||void 0===r?void 0:r.ack)||s("ok"),o.receive("ok",(()=>s("ok"))),o.receive("timeout",(()=>s("timed out")))}))}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=i.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(n.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise((s=>{const i=new u(this,n.leave,{},e);i.receive("ok",(()=>{t(),s("ok")})).receive("timeout",(()=>{t(),s("timed out")})).receive("error",(()=>{s("error")})),i.send(),this._canPush()||i.trigger("ok",{})}))}_push(e,t,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new u(this,e,t,s);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(e,t,s){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,s){var i,r;const o=e.toLocaleLowerCase(),{close:a,error:c,leave:h,join:l}=n;if(s&&[a,c,h,l].indexOf(o)>=0&&s!==this._joinRef())return;let u=this._onMessage(o,t,s);if(t&&!u)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?null===(i=this.bindings.postgres_changes)||void 0===i||i.filter((e=>{var t,s,i;return"*"===(null===(t=e.filter)||void 0===t?void 0:t.event)||(null===(i=null===(s=e.filter)||void 0===s?void 0:s.event)||void 0===i?void 0:i.toLocaleLowerCase())===o})).map((e=>e.callback(u,s))):null===(r=this.bindings[o])||void 0===r||r.filter((e=>{var s,i,n,r,a,c;if(["broadcast","presence","postgres_changes"].includes(o)){if("id"in e){const r=e.id,o=null===(s=e.filter)||void 0===s?void 0:s.event;return r&&(null===(i=t.ids)||void 0===i?void 0:i.includes(r))&&("*"===o||(null==o?void 0:o.toLocaleLowerCase())===(null===(n=t.data)||void 0===n?void 0:n.type.toLocaleLowerCase()))}{const s=null===(a=null===(r=null==e?void 0:e.filter)||void 0===r?void 0:r.event)||void 0===a?void 0:a.toLocaleLowerCase();return"*"===s||s===(null===(c=null==t?void 0:t.event)||void 0===c?void 0:c.toLocaleLowerCase())}}return e.type.toLocaleLowerCase()===o})).map((e=>{if("object"==typeof u&&"ids"in u){const e=u.data,{schema:t,table:s,commit_timestamp:i,type:n,errors:r}=e,o={schema:t,table:s,commit_timestamp:i,eventType:n,new:{},old:{},errors:r};u=Object.assign(Object.assign({},o),this._getPayloadRecords(e))}e.callback(u,s)}))}_isClosed(){return this.state===i.closed}_isJoined(){return this.state===i.joined}_isJoining(){return this.state===i.joining}_isLeaving(){return this.state===i.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,s){const i=e.toLocaleLowerCase(),n={type:i,filter:t,callback:s};return this.bindings[i]?this.bindings[i].push(n):this.bindings[i]=[n],this}_off(e,t){const s=e.toLocaleLowerCase();return this.bindings[s]=this.bindings[s].filter((e=>{var i;return!((null===(i=e.type)||void 0===i?void 0:i.toLocaleLowerCase())===s&&R.isEqual(e.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(n.close,{},e)}_onError(e){this._on(n.error,{},(t=>e(t)))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=i.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return"INSERT"!==e.type&&"UPDATE"!==e.type||(t.new=f(e.columns,e.record)),"UPDATE"!==e.type&&"DELETE"!==e.type||(t.old=f(e.columns,e.old_record)),t}}var O=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};const S=()=>{};class L{constructor(s,i){var n;this.accessToken=null,this.channels=[],this.endPoint="",this.headers=t,this.params={},this.timeout=1e4,this.transport=e,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=S,this.conn=null,this.sendBuffer=[],this.serializer=new l,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.eventsPerSecondLimitMs=100,this.inThrottle=!1,this.endPoint=`${s}/${r.websocket}`,(null==i?void 0:i.params)&&(this.params=i.params),(null==i?void 0:i.headers)&&(this.headers=Object.assign(Object.assign({},this.headers),i.headers)),(null==i?void 0:i.timeout)&&(this.timeout=i.timeout),(null==i?void 0:i.logger)&&(this.logger=i.logger),(null==i?void 0:i.transport)&&(this.transport=i.transport),(null==i?void 0:i.heartbeatIntervalMs)&&(this.heartbeatIntervalMs=i.heartbeatIntervalMs);const o=null===(n=null==i?void 0:i.params)||void 0===n?void 0:n.eventsPerSecond;o&&(this.eventsPerSecondLimitMs=Math.floor(1e3/o)),this.reconnectAfterMs=(null==i?void 0:i.reconnectAfterMs)?i.reconnectAfterMs:e=>[1e3,2e3,5e3,1e4][e-1]||1e4,this.encode=(null==i?void 0:i.encode)?i.encode:(e,t)=>t(JSON.stringify(e)),this.decode=(null==i?void 0:i.decode)?i.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new h((()=>O(this,void 0,void 0,(function*(){this.disconnect(),this.connect()}))),this.reconnectAfterMs)}connect(){this.conn||(this.conn=new this.transport(this._endPointURL(),[],null,this.headers),this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e)))}disconnect(e,t){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,null!=t?t:""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}removeChannel(e){return e.unsubscribe().then((e=>(0===this.channels.length&&this.disconnect(),e)))}removeAllChannels(){return Promise.all(this.channels.map((e=>e.unsubscribe()))).then((e=>(this.disconnect(),e)))}log(e,t,s){this.logger(e,t,s)}connectionState(){switch(this.conn&&this.conn.readyState){case s.connecting:return o.Connecting;case s.open:return o.Open;case s.closing:return o.Closing;default:return o.Closed}}isConnected(){return this.connectionState()===o.Open}channel(e,t={config:{}}){this.isConnected()||this.connect();const s=new R(`realtime:${e}`,t,this);return this.channels.push(s),s}push(e){const{topic:t,event:s,payload:i,ref:n}=e;let r=()=>{this.encode(e,(e=>{var t;null===(t=this.conn)||void 0===t||t.send(e)}))};if(this.log("push",`${t} ${s} (${n})`,i),this.isConnected())if(["broadcast","presence","postgres_changes"].includes(s)){if(this._throttle(r)())return"rate limited"}else r();else this.sendBuffer.push(r)}setAuth(e){this.accessToken=e,this.channels.forEach((t=>{e&&t.updateJoinPayload({access_token:e}),t.joinedOnce&&t._isJoined()&&t._push(n.access_token,{access_token:e})}))}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find((t=>t.topic===e&&(t._isJoined()||t._isJoining())));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter((t=>t._joinRef()!==e._joinRef()))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:"1.0.0"}))}_onConnMessage(e){this.decode(e.data,(e=>{let{topic:t,event:s,payload:i,ref:n}=e;(n&&n===this.pendingHeartbeatRef||s===(null==i?void 0:i.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${i.status||""} ${t} ${s} ${n&&"("+n+")"||""}`,i),this.channels.filter((e=>e._isMember(t))).forEach((e=>e._trigger(s,i,n))),this.stateChangeCallbacks.message.forEach((t=>t(e)))}))}_onConnOpen(){this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval((()=>this._sendHeartbeat()),this.heartbeatIntervalMs),this.stateChangeCallbacks.open.forEach((e=>e()))}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach((t=>t(e)))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach((t=>t(e)))}_triggerChanError(){this.channels.forEach((e=>e._trigger(n.error)))}_appendParams(e,t){if(0===Object.keys(t).length)return e;const s=e.match(/\?/)?"&":"?";return`${e}${s}${new URLSearchParams(t)}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach((e=>e())),this.sendBuffer=[])}_sendHeartbeat(){var e;if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void(null===(e=this.conn)||void 0===e||e.close(1e3,"hearbeat timeout"));this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}_throttle(e,t=this.eventsPerSecondLimitMs){return()=>!!this.inThrottle||(e(),this.inThrottle=!0,setTimeout((()=>{this.inThrottle=!1}),t),!1)}}export{T as REALTIME_LISTEN_TYPES,j as REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,a as REALTIME_PRESENCE_LISTEN_EVENTS,k as REALTIME_SUBSCRIBE_STATES,R as RealtimeChannel,L as RealtimeClient,d as RealtimePresence};export default null;
//# sourceMappingURL=/sm/f05813f1a931347f56398e6fc37605e753699e22020ae0886d5ce5042590e289.map
}
