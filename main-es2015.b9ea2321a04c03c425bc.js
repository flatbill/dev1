(self.webpackChunkdev1=self.webpackChunkdev1||[]).push([[179],{8255:function(e){function t(e){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=function(){return[]},t.resolve=t,t.id=8255,e.exports=t},3510:function(e,t,n){"use strict";var r=n(8788),o=n(1908),l=n(6185),i=n(9457);let a=(()=>{class e{constructor(){this.title="playground for FlyTechFree",this.myCount=1e3,this.myFriend="?",this.msgFromBeyond="?",this.nango="nangoDude",this.gdArray1=["start1","start2","start3"],this.myFileUrl=new URL("https://test"),this.myFileName="file1.txt",this.fileContents="This is the content of my file",this.today=new Date,this.totemText="killeroo"}ngOnInit(){console.log("running ngOnInit"),this.myFileName="gooboo777.txt"}parentFun2(e){this.myCount=e,this.msgFromBeyond="msg from parentFun2"}parentFun1(e){this.msgFromBeyond=" Msg from parentFun1 ",this.myFriend=e}parentFun3(e){this.gdArray1=e}tryTruck(){let e=new l.Workbook,t=e.addWorksheet("sheet1",{properties:{tabColor:{argb:"FF00FF00"},outlineLevelCol:1,defaultColWidth:15}});t.columns=[{header:"Id",key:"id",width:10},{header:"Name",key:"name",width:22},{header:"When",key:"when",width:10,outlineLevel:1},{header:"Totem Text",key:"totemText",width:50,outlineLevel:1}],this.totemText="this guy is a great wfh candidate.";const n=[[55,"Bob",new Date,this.totemText],[66,"Ed",new Date,"blaBlaBla"],[77,"Ron",new Date],[88,"Ken",new Date]];t.addRows(n);let r=t.getCell("C3");r.value=new Date(1968,5,1),r=t.getCell("B5"),r.value="Kip",t.getCell("B4").font={name:"Arial Black",color:{argb:"FF00FF00"},family:2,size:12,italic:!0},t.getCell("A1").fill={type:"pattern",pattern:"solid",fgColor:{argb:"F08080"}},t.getCell("B1").fill={type:"pattern",pattern:"solid",fgColor:{argb:"F08080"}},t.getCell("C1").fill={type:"pattern",pattern:"solid",fgColor:{argb:"F08080"}},t.getCell("D1").fill={type:"pattern",pattern:"solid",fgColor:{argb:"F08080"}},e.xlsx.writeBuffer().then(e=>{let t=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});i.saveAs(t,"Truck.xlsx")})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-root"]],decls:35,vars:5,consts:[[1,"hero","is-primary"],[1,"subtitle"],[1,"subtitley"],[1,"columns"],[1,"column"],[1,"label"],["readonly","","type","text",1,"inputy"],["id","tryTruck",1,"tag","is-small","is-info","m-1","is-clickable",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"h2",1),o._uU(2," hello from parent app.component.html "),o.qZA(),o.TgZ(3,"h2",2),o._uU(4),o.qZA(),o.qZA(),o.TgZ(5,"div",3),o.TgZ(6,"div",4),o.TgZ(7,"label",5),o._uU(8,"msgFromBeyond"),o.qZA(),o.TgZ(9,"textarea",6),o._uU(10),o.qZA(),o.qZA(),o.TgZ(11,"div",4),o.TgZ(12,"label",5),o._uU(13,"myCount"),o.qZA(),o.TgZ(14,"textarea",6),o._uU(15),o.qZA(),o.qZA(),o.TgZ(16,"div",4),o.TgZ(17,"label",5),o._uU(18,"myFriend"),o.qZA(),o.TgZ(19,"textarea",6),o._uU(20),o.qZA(),o.qZA(),o.TgZ(21,"div",4),o.TgZ(22,"label",5),o._uU(23,"gdArray1"),o.qZA(),o.TgZ(24,"textarea",6),o._uU(25),o.qZA(),o.qZA(),o.qZA(),o.TgZ(26,"h2",2),o._uU(27,"parent app.component.html continued..."),o.qZA(),o.TgZ(28,"p"),o._uU(29," So, what are we trying to do here? "),o._UZ(30,"br"),o._uU(31," Jun2021 let's try excelJS. "),o._UZ(32,"br"),o.qZA(),o.TgZ(33,"span",7),o.NdJ("click",function(){return t.tryTruck()}),o._uU(34," Create & Download Spreadsheet Truck.xlxs"),o.qZA()),2&e&&(o.xp6(4),o.hij(" app title: ",t.title," "),o.xp6(6),o.hij(" ",t.msgFromBeyond,"  "),o.xp6(5),o.hij(" ",t.myCount,"  "),o.xp6(5),o.hij(" ",t.myFriend,"  "),o.xp6(5),o.hij(" ",t.gdArray1,"  "))},encapsulation:2}),e})(),s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e,bootstrap:[a]}),e.\u0275inj=o.cJS({providers:[],imports:[[r.b2]]}),e})();(0,o.G48)(),r.q6().bootstrapModule(s).catch(e=>console.error(e))}},function(e){"use strict";e.O(0,[736],function(){return e(e.s=3510)}),e.O()}]);