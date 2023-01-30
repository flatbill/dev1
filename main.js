"use strict";
(self["webpackChunkdev1"] = self["webpackChunkdev1"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Bill_flyNewSky2020_dev1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_utils_apiRat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiRat */ 7857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);

// import { createClient } from '@supabase/supabase-js'
// import { isError } from 'util'
// import { workers } from 'cluster'
// import { identifierModuleUrl } from '@angular/compiler'
// import { isDevMode } from '@angular/core'
// import { environment } from 'src/environments/environment'


// jun2021 no components for this playground?
// yipee!
//ng build --prod --aot --vendor-chunk --common-chunk --delete-output-path --buildOptimizer
class AppComponent {
  constructor() {
    this.title = 'playground for FlyTechFree';
    //initialCountInAppComponent: number = 10;
    this.myCount = 1000;
    this.myFriend = '??';
    this.msgFromBeyond = '?';
    this.nango = 'nangoDude';
    this.gdArray1 = ['start1', 'start2', 'start3'];
    this.myFileUrl = new URL('https://test');
    this.myFileName = 'file1.txt';
    this.fileContents = "This is the content of my file";
    this.today = new Date();
    this.totemText = 'killeroo';
    this.supaMsg = 'i would rather be dead than wet my bed..';
    this.supaTableName = 'guitars';
    this.sbGuitars = new Array();
    this.sbTodos = new Array();
    // title = environment.title
    this.myCurUrl = window.location.href;
  }
  // supaUrl = environment.supaUrl
  // supaAnonKey = environment.supaAnonKey
  // supaClient = createClient('123', '456')
  // obj1 = {
  //   propertyName1: 'prop1',
  //   propertyName2: 'prop2',
  //   mybuildInArray: [1,2,3]
  // }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Bill_flyNewSky2020_dev1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('45 running ngOnInit');
      // if (isDevMode()) {
      //   console.log('isDevMode = ON')
      // } else {
      //   console.log('isDevMode = OFF')
      // }
      _this.myFileName = 'gooboo777.txt';
      console.log('48');
      // this.launchReadUsers() 
      console.log('49');
      //CREATE EXTENSION supabase_vault CASCADE; duznt work, needs local sql
      //let waitForIt = await this.supaTodoList()  
      //waitForIt = await this.supaGuitars()  
      // let resFromApiCall = await this.apiCall()
      console.log('55');
      // console.log(resFromApiCall)
      console.log('57');
      // let waitForIt = await this.supaRead('guitars','make','Martin',1)  
      // waitForIt = await this.supaRead('todoList','todoTxt','rain',1)  
      // waitForIt = await this.supaRead('guitars','guitarType','acoustic',7)  
      // let seven =  this.kill1()
      // console.log(seven)
      console.log(Date.now(), 'bottom of ngOnInit');
      //this.setUrlFileName()
      //this.download666("hello.txt","This is the content of my file :)")
    })();
  }

  parentFun2(event) {
    this.myCount = event;
    this.msgFromBeyond = 'msg from parentFun2';
  }
  parentFun1(myFriendParmIn) {
    this.msgFromBeyond = " Msg from parentFun1 ";
    this.myFriend = myFriendParmIn;
  }
  parentFun3(gdaParmIn) {
    this.gdArray1 = gdaParmIn; //  ['cars','bars','guitars']
  }
  // kill1(){ return 7}
  //async tryCar(){
  //setUrlFileName() {
  //let currentUrl  = new URL(window.location.href)
  //let leftUrl = currentUrl.toString().split("?")[0] //take off old querystring
  //let myFileUrl = leftUrl   + '/goo.txt'     
  //this.myFileName = 'gooboo777.txt'
  //let a = document.getElementById("a");
  //let myFile = new Blob([text], {type: type});
  //a.href = URL.createObjectURL(myFile);
  //a.myDownload = name;
  //}
  // setQueryString(ix){
  //   console.log('running pro setQueryString')
  //   let myUrl  = new URL(window.location.href)
  //   //this.qid  = this.qidsArray[ix].qid
  //   let leftUrl = myUrl.toString().split("?")[0] //take off old querystring
  //   let myNewUrl = leftUrl       // + '?qid=4&cust=1'
  //   //  + '?qid='  + this.qid
  //   //  + '&cust=' + this.cust
  //   //history.pushState({}, null, myNewUrl)
  // } // end setQueryString
  //  download666(fName,fContent) {
  //   // hacky way to create a download element and fake click it.
  //   var el = document.createElement('a');
  //   var myBlob:any = new Blob([fContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
  //   el.setAttribute('href', 'data:text/plain;charset=utf-8,' 
  //     + encodeURIComponent(myBlob)); // set contents from excelJS
  //   el.setAttribute('download', fName);
  //   el.style.display = 'none';
  //   document.body.appendChild(el);
  //   el.click();
  //   document.body.removeChild(el);
  // }
  // download777(fname,txt){
  //    // hacky way to create a download element and fake click it.
  //   var el = document.createElement('a');
  //   el.setAttribute('href', 'data:text/plain;charset=utf-8,' 
  //     + encodeURIComponent(txt)); // set contents from excelJS
  //   el.setAttribute('download', fname);
  //   el.style.display = 'none';
  //   document.body.appendChild(el);
  //   el.click();
  //   document.body.removeChild(el);
  // }
  // dnLoadScoreFile(dnScoreFileName, txt) {
  //   var elem = document.createElement('a')
  //   elem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt))
  //   elem.setAttribute('download', dnScoreFileName)
  //   elem.style.display = 'none'
  //   document.body.appendChild(elem)
  //   elem.click()
  //   document.body.removeChild(elem) 
  //   this.msg1 = 'file downloaded.'
  //   this.downloadCsvPending = false
  // }
  tryTruck() {
    /* generate array buffer */
    //// 
    // let workbook = new Workbook()
    // let worksheet = workbook.addWorksheet('sheet1', 
    // {properties:        {
    //   tabColor:{argb:'FF00FF00'},
    //   outlineLevelCol:1,
    //   defaultColWidth:15
    // }})
    ////
    // worksheet.columns = [
    //   { header: 'Id', key: 'id', width: 10 },
    //   { header: 'Name', key: 'name', width: 22 },
    //   { header: 'When', key: 'when', width: 10 },
    //   { header: 'Totem Text', key: 'totemText', width: 50 },
    // ];
    this.totemText = 'this guy is a great wfh candidate.';
    let rows = [[55, 'Bob', new Date(), this.totemText], [66, 'Ed', new Date(), 'blaBlaBla'], [77, 'Ron', new Date()], [88, 'Ken', new Date()]];
    // add new rows and return them as array of row objects
    // let newRows = worksheet.addRows(rows);
    // let cell = worksheet.getCell('C3');
    // cell.value = new Date(1968, 5, 1);
    // cell = worksheet.getCell('B5');
    // cell.value = 'Kip'
    // for the graduate graphic designers...
    //       worksheet.getCell('B4').font = {
    //       name: 'Arial Black',
    //       color: { argb: 'FF00FF00' },
    //       family: 2,
    //       size: 12,
    //       italic: true 
    //       };
    //       worksheet.getCell('A1').fill = {
    //       type: 'pattern',
    //       pattern:'solid',
    //       fgColor:{argb:'F08080'}, //coral
    // }
    // worksheet.getCell('B1').fill = {
    //   type: 'pattern',
    //   pattern:'solid',
    //   fgColor:{argb:'F08080'}, //coral
    // }
    // worksheet.getCell('C1').fill = {
    //   type: 'pattern',
    //   pattern:'solid',
    //   fgColor:{argb:'F08080'}, //coral
    // }
    // worksheet.getCell('D1').fill = {
    //   type: 'pattern',
    //   pattern:'solid',
    //   fgColor:{argb:'F08080'}, //coral
    // }
    /////////////////////////////////////////////////
    // workbook.xlsx.writeBuffer().then((data1) => {
    //   let blob = new Blob([data1], { 
    //     type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
    //   })
    //   fs.saveAs(blob, 'Truck.xlsx')
    // })
  } // end tryTruck
  tryFunction1() {
    console.log('running tryFunction1');
    this.supaMsg = 'i am trying tryFunction1...';
    src_utils_apiRat__WEBPACK_IMPORTED_MODULE_1__["default"].function1();
    this.supaMsg = 'i have tried function1.';
    console.log('i am done with func tryFunction1.');
  }
  //   async function sendWorkbook(workbook, response) { 
  //     var fileName = 'FileName.xlsx';
  //     response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  //     response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
  //      await workbook.xlsx.write(response);
  //     response.end();
  // }
  // async supaTodoList() {
  //   //This works, but now we use generic supaRead
  //   console.log(Date.now(), 'running supaTodoList')
  //   let eMsg = ''
  //   let { data: todoList, error } = await this.supaClient
  //   .from('todoList').select('*')
  //   if (error) {
  //     eMsg = error.message
  //     this.supaMsg ='207 supabase hickup: '
  //     this.supaMsg = this.supaMsg + eMsg
  //     throw new Error(eMsg) 
  //   }else{
  //     this.supaMsg = todoList[0].todoTxt
  //     console.log('first todo is: ', todoList[0].todoTxt)
  //   }
  //   console.log(Date.now(), 'bottom of supaTodoList')
  // } // end supaTodoList
  // async supaGuitars() {
  //   // this works, but now use generic supaRead
  //   console.log(Date.now(), 'running supaGuitars')
  //   let eMsg = ''
  //   let { data: guitars, error } = await this.supaClient
  //   .from('guitars').select().eq('make', 'Martin')
  //   if (error) {
  //     eMsg = error.message
  //     this.supaMsg ='233 supabase hickup: '
  //     this.supaMsg = this.supaMsg + eMsg
  //     throw new Error(eMsg) 
  //   }else{
  //     this.supaMsg = this.supaMsg + '--' + guitars[0].make
  //     console.log('first guitar is: ', guitars[0].make)
  //   }
  //   console.log(Date.now(), 'bottom of supaGuitars')
  // }  // end supaGuitars
  // async supaRead(tableNameParmIn,colNameParmIn,colValParmIn,limitParmIn) {
  //   console.log(Date.now(), 'running supaRead')
  //   let eMsg = ''
  //   let { data: supaDataOut, error } = await this.supaClient
  //   .from(tableNameParmIn)
  //   .select('*')
  //   .limit(limitParmIn)
  //   .eq(colNameParmIn,colValParmIn)
  //   if (error) {
  //     eMsg = error.message
  //     this.supaMsg ='250 supabase hickup: '
  //     this.supaMsg = this.supaMsg + eMsg
  //     throw new Error(eMsg) 
  //   }else{
  //     // we got a result from supabase.
  //     // clone the array, so I can reference it
  //      let cloner = (x) => x 
  //      let myArray = supaDataOut.map(cloner)
  //     if (myArray.length < 1){
  //       // no supabase data matching our criteria
  //       this.supaMsg = 'no data found for: ' 
  //       +tableNameParmIn + ' ' + colNameParmIn + ' ' + colValParmIn 
  //       return 
  //     }
  //     // myArray myArray.length means we found at least one supabase rec.
  //     this.supaMsg += ' *** ' + tableNameParmIn + ' '
  //     let myColNames = Object.keys(myArray[0])  
  //     for (let k=0;  k < myArray.length; k++){
  //       let myColVals  = Object.values(myArray[k]) 
  //       console.log(Object.values(myArray[k]))
  //       for (let jj=0;  jj < myColNames.length; jj++){
  //         // show all the fields and values from the supabase recs
  //         this.supaMsg += ' ' + myColNames[jj] + ': '
  //         this.supaMsg += myColVals[jj]
  //       } // end inner for
  //     } // end outer for
  //     // let myColVals  = Object.values(myArray[0]) // first rec from supabase
  //     let i = myColNames.findIndex(c => c == colNameParmIn)
  //     console.log('282 no error with supaRead')
  //   }
  //   console.log(Date.now(), 'bottom of supaRead')
  //   // .eq(colNameParmIn,"eat a dumptruck full of chocolate")
  //   // .select(`${sqlParmIn}`) this works, but relies on template literals
  //   // .select is supposed to be sql for the column names to return.
  //   // .match({ id: 1})  match works funny, duznt like my parms
  //   // .filter works funny, hard to understand in and eq
  //   // .filter(colNameParmIn,'in','("eat a dumptruck full of chocolate","Japan")')
  //   // .filter(colNameParmIn,'eq','"eat a dumptruck full of chocolate"')
  // } // end supaRead
  // async apiCall() {
  //   console.log('317 running apiCall')
  //   apiRat.getEnvVars(this.myCurUrl)
  //   return 'shakerbaker'  
  //   }
  launchReadUsers() {
    console.log('running launchReadUsers');
    this.supaMsg = 'running launchReadUsers';
    src_utils_apiRat__WEBPACK_IMPORTED_MODULE_1__["default"].readUsers2().then(qtDbRtnObj => {
      console.log(' running .then of apiRat.readUsers2');
      console.log('qtDbRtnObj----->');
      console.table(qtDbRtnObj);
      console.log('app.component line 344');
      console.log(qtDbRtnObj.Response);
      console.log(qtDbRtnObj.Response);
      console.log(qtDbRtnObj.Response);
      console.log(qtDbRtnObj.Response);
      console.log(qtDbRtnObj.Response);
      console.log(qtDbRtnObj.Response.Body);
      console.log('app.component line 351');
      let x = qtDbRtnObj.Response.Body.read();
      let y = x.decode();
      console.log(y);
      console.log(y);
      console.log(y);
      console.log(y);
      console.log(y);
      console.log(qtDbRtnObj.length);
      console.log(typeof qtDbRtnObj);
      // this.buildListOfUsers(qtDbRtnObj)
    }).catch(() => {
      console.log('apiRat.readUsers2 error. ');
    });
  } //end launchReadUsers
  launchReadSupabaseBroken() {
    console.log('372 running launchReadSupabase');
    this.supaMsg = 'running launchReadSupabase';
    let qtDbRtnObj = src_utils_apiRat__WEBPACK_IMPORTED_MODULE_1__["default"].readSupabase();
    console.log('375');
    console.table(qtDbRtnObj);
    this.buildSupabaseList(qtDbRtnObj);
  } //end launchReadSupabase
  launchReadSupabase() {
    // tableName, tableFieldName, lookupVal, maxRows
    let tableNameIn = 'guitars';
    let tableFieldNameIn = 'make';
    let lookupValIn = 'Washburn';
    let myUrl = 'https://play.flytechfree.com/.netlify/functions/readSupabase';
    myUrl += '?tableName=' + tableNameIn;
    myUrl += '&tableField=' + tableFieldNameIn;
    myUrl += '&lookupVal=' + lookupValIn;
    myUrl += '&maxRows=' + 1;
    alert(myUrl);
    // fetch('https://play.flytechfree.com/.netlify/functions/readSupabase?table=guitars')
    fetch(myUrl).then(res => res.json()).then(data1 => {
      console.table(data1);
      console.log('yes, there are witches390');
      // this.buildSupabaseList(data1)  
    }).catch(() => {
      console.log('launchReadSupabase Error.');
    });
  }
  buildSupabaseList(dbObj) {
    console.log('running buildSupabaseList 391 ');
    console.table(dbObj);
    console.log(dbObj.length);
    if (this.supaTableName == 'guitars') {
      this.sbGuitars = dbObj.slice();
    }
    if (this.supaTableName == 'todos') {
      this.sbTodos = dbObj.slice();
    }
    console.table(this.sbGuitars);
    console.log(this.sbGuitars[0].make);
    // console.log(this.sbTodos[0].tasks)
    console.log('done with buildSupabaseList');
  }
} // end appcomponent
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 46,
  vars: 6,
  consts: [[1, "hero", "is-primary"], [1, "subtitle"], [1, "subtitley"], [1, "columns"], [1, "column"], [1, "label"], ["readonly", "", "type", "text", 1, "inputy"], ["id", "tryTruck", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "launchReadUsers", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "launchReadSupabase", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["id", "tryFunction1", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["cols", "166", "rows", "11"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " hello from parent app.component.html ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "msgFromBeyond");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "myCount");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4)(17, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "myFriend");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4)(22, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "gdArray1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "parent app.component.html continued...");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " So, what are we trying to do here? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Jun2021 let's try excelJS. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " ** Jan 2023 xl disabled, trying supabase. ** xl hogs lotsa mb. ** wish I could find a lightweight spreadsheet writer ** that could do colors like excelJS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_span_click_34_listener() {
        return ctx.tryTruck();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Create & Download Spreadsheet Truck.xlxs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_span_click_36_listener() {
        return ctx.launchReadUsers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " launchReadUsers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_span_click_38_listener() {
        return ctx.launchReadSupabase();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " launchSupabase");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_span_click_40_listener() {
        return ctx.tryFunction1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " try function1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "in dev1, npm install @supabase/supabase-js");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "textarea", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" app title: ", ctx.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.msgFromBeyond, "  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.myCount, "  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.myFriend, "  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.gdArray1, "  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("  \n    ", ctx.supaMsg, "\n");
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  supaUrl: 'https://xkjfwntnkxboulwiolar.supabase.co',
  supaAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhramZ3bnRua3hib3Vsd2lvbGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4NjQzMjQsImV4cCI6MTk4ODQ0MDMyNH0.MQeBqKr8IBoW7XEPlSp4MKRFXg39C6rPPPSv9quuBJg',
  apiKey: 'notSureWhatThisIsForSeeDigitalOcean'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 7857:
/*!*****************************!*\
  !*** ./src/utils/apiRat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const qtReadUsers = () => {
  console.log(' running qtreadusers');
  let myUrl = 'https://play.flytechfree.com/.netlify/functions/qtReadUsers';
  return fetch(myUrl);
};
const readSupabase = () => {
  console.log(' running apRat.readSupabase');
  fetch('https://play.flytechfree.com/.netlify/functions/readSupabase').then(res => res.json()).then(data1 => {
    console.table(data1);
    console.log('yes, there are demons');
  }).catch(() => {
    console.log('launchReadSupabase Error.');
  });
};
const function1 = () => {
  let myUrl = 'https://play.flytechfree.com/.netlify/functions/function-1';
  fetch(myUrl);
};
const readUsers2 = () => {
  let myUrl = 'https://play.flytechfree.com/.netlify/functions/readUsers2';
  console.log('14 running readUsers2');
  return fetch(myUrl);
}; // end readUsers2

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  qtReadUsers: qtReadUsers,
  readUsers2: readUsers2,
  readSupabase: readSupabase,
  function1: function1
});

// let getEnvVars = (data) => {

// fetch('https://flytechfreeplayground.netlify.app/.netlify/functions/getEnvVars')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not OK');
//     }
//     return response.json();
//   })
//   // .then((myBlob) => {
//   //   myImage.src = URL.createObjectURL(myBlob);
//   // })
//   .catch((error) => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

// }

// let getEnvVars  =  async (data) => {
//   console.log('22a running getEnvVars')
//   let res = await fetch('https://play.flytechfree.com/.netlify/functions/getEnvVars')
//   return await res.json()
// }

// let getEnvVars3 = (data) => {
//   console.log('292 running getEnvVars')
//   //fetch('https://flytechfreeplayground.netlify.app/.netlify/functions/getEnvVars')
//   fetch('https://play.flytechfree.com/.netlify/functions/getEnvVars')
//   .then((response) => response.json())
//   .then((daxa) => {
//     console.log('27')
//     console.log(daxa.length)      
//     console.log(daxa.length)      
//   })
//   .catch(console.error)
//   console.log('32')
// }

// const getEnvVars2 = (data) => {
//   return fetch(`https://flytechfreeplayground.netlify.app/.netlify/functions/getEnvVars`, 
//   {
//   //return fetch('/.netlify/functions/getEnvVars', {
//     body: JSON.stringify(data),
//     method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }
// const qtWriteQuestion = (data) => {
//   return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteQuestion`, {
//     body: JSON.stringify(data),
//     method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }

// export default  {
//   getEnvVars: getEnvVars
// }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map