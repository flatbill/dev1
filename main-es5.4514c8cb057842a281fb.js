!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(self.webpackChunkdev1=self.webpackChunkdev1||[]).push([[179],{8255:function(e){function t(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=8255,e.exports=t},3510:function(n,r,o){"use strict";var i=o(8788),a=o(1908),u=o(6185),s=o(9457),l=function(){var n=function(){function n(){e(this,n),this.title="playground for FlyTechFree",this.myCount=1e3,this.myFriend="?",this.msgFromBeyond="?",this.nango="nangoDude",this.gdArray1=["start1","start2","start3"],this.myFileUrl=new URL("https://test"),this.myFileName="file1.txt",this.fileContents="This is the content of my file",this.today=new Date}var r,o,i;return r=n,(o=[{key:"ngOnInit",value:function(){console.log("running ngOnInit"),this.myFileName="gooboo777.txt"}},{key:"parentFun2",value:function(e){this.myCount=e,this.msgFromBeyond="msg from parentFun2"}},{key:"parentFun1",value:function(e){this.msgFromBeyond=" Msg from parentFun1 ",this.myFriend=e}},{key:"parentFun3",value:function(e){this.gdArray1=e}},{key:"tryTruck",value:function(){var e=new u.Workbook,t=e.addWorksheet("sheet1",{properties:{tabColor:{argb:"FF00FF00"},outlineLevelCol:1,defaultColWidth:15}}),n=[["Nbr","Name","Date"],[5,"Bob",new Date],[6,"Ed",new Date],[7,"Ron",new Date],[8,"Ken",new Date]];t.addRows(n);var r=t.getCell("C3");r.value=new Date(1968,5,1),(r=t.getCell("B5")).value="Kip",e.xlsx.writeBuffer().then(function(e){var t=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});s.saveAs(t,"Truck.xlsx")})}}])&&t(r.prototype,o),i&&t(r,i),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-root"]],decls:41,vars:5,consts:[[1,"hero","is-primary"],[1,"subtitle"],[1,"subtitley"],[1,"columns"],[1,"column"],[1,"label"],["readonly","","type","text",1,"inputy"],["id","tryTruck",1,"tag","is-small","is-info","m-1","is-clickable",3,"click"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"h2",1),a._uU(2," hello from parent app.component.html "),a.qZA(),a.TgZ(3,"h2",2),a._uU(4),a.qZA(),a.qZA(),a.TgZ(5,"div",3),a.TgZ(6,"div",4),a.TgZ(7,"label",5),a._uU(8,"msgFromBeyond"),a.qZA(),a.TgZ(9,"textarea",6),a._uU(10),a.qZA(),a.qZA(),a.TgZ(11,"div",4),a.TgZ(12,"label",5),a._uU(13,"myCount"),a.qZA(),a.TgZ(14,"textarea",6),a._uU(15),a.qZA(),a.qZA(),a.TgZ(16,"div",4),a.TgZ(17,"label",5),a._uU(18,"myFriend"),a.qZA(),a.TgZ(19,"textarea",6),a._uU(20),a.qZA(),a.qZA(),a.TgZ(21,"div",4),a.TgZ(22,"label",5),a._uU(23,"gdArray1"),a.qZA(),a.TgZ(24,"textarea",6),a._uU(25),a.qZA(),a.qZA(),a.qZA(),a.TgZ(26,"h2",2),a._uU(27,"parent app.component.html continued..."),a.qZA(),a.TgZ(28,"p"),a._uU(29," So, what are we trying to do here? "),a._UZ(30,"br"),a._uU(31," Jun2021 let's try excelJS. "),a._UZ(32,"br"),a._uU(33," Jun2021 sorta uses BULMA css for style, "),a._UZ(34,"br"),a._uU(35," has an old copy of bula in styles.css? "),a._UZ(36,"br"),a._uU(37," old bulma might be missing is-clickable and ml-3 ? "),a._UZ(38,"br"),a.qZA(),a.TgZ(39,"span",7),a.NdJ("click",function(){return t.tryTruck()}),a._uU(40," tryTruck"),a.qZA()),2&e&&(a.xp6(4),a.hij(" app title: ",t.title," "),a.xp6(6),a.hij(" ",t.msgFromBeyond,"  "),a.xp6(5),a.hij(" ",t.myCount,"  "),a.xp6(5),a.hij(" ",t.myFriend,"  "),a.xp6(5),a.hij(" ",t.gdArray1,"  "))},encapsulation:2}),n}(),c=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t,bootstrap:[l]}),t.\u0275inj=a.cJS({providers:[],imports:[[i.b2]]}),t}();(0,a.G48)(),i.q6().bootstrapModule(c).catch(function(e){return console.error(e)})}},function(e){"use strict";e.O(0,[736],function(){return e(e.s=3510)}),e.O()}])}();