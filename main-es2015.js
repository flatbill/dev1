(self["webpackChunkdev1"] = self["webpackChunkdev1"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 9556:
/*!*****************************!*\
  !*** ./src/utils/apiRat.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Api methods to call /functions */

const getEnvVars = (data) => {
  return fetch(`https://flytechfreeplayground.netlify.app/.netlify/functions/getEnvVars`, {
  //return fetch('/.netlify/functions/getEnvVars', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
// const qtWriteQuestion = (data) => {
//   return fetch(`https://qncsurvey.netlify.app/.netlify/functions/qtWriteQuestion`, {
//     body: JSON.stringify(data),
//     method: 'POST'
//   }).then(response => {
//     return response.json()
//   })
// }


/* harmony default export */ __webpack_exports__["default"] = ({
  getEnvVars: getEnvVars
});



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ 7813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_utils_apiRat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/apiRat */ 9556);


// import { isError } from 'util'
// import { workers } from 'cluster'
// import { identifierModuleUrl } from '@angular/compiler'




// jun2021 no components for this playground?
// yipee!
//ng build --prod --aot --vendor-chunk --common-chunk --delete-output-path --buildOptimizer
class AppComponent {
    constructor() {
        this.title = 'playground for FlyTechFree';
        //initialCountInAppComponent: number = 10;
        this.myCount = 1000;
        this.myFriend = '?';
        this.msgFromBeyond = '?';
        this.nango = 'nangoDude';
        this.gdArray1 = ['start1', 'start2', 'start3'];
        this.myFileUrl = new URL('https://test');
        this.myFileName = 'file1.txt';
        this.fileContents = "This is the content of my file";
        this.today = new Date();
        this.totemText = 'killeroo';
        this.supaMsg = '';
        // title = environment.title
        this.supaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.supaUrl;
        this.supaAnonKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.supaAnonKey;
        this.supaClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(this.supaUrl, this.supaAnonKey);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('running ngOnInit');
            if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.isDevMode)()) {
                console.log('isDevMode = ON');
            }
            else {
                console.log('isDevMode = OFF');
            }
            this.myFileName = 'gooboo777.txt';
            console.log('47a');
            // console.log(moo)
            console.log('49');
            //CREATE EXTENSION supabase_vault CASCADE; duznt work, needs local sql
            //let waitForIt = await this.supaTodoList()  
            //waitForIt = await this.supaGuitars()  
            let waitForIt = yield this.apiCall();
            waitForIt = yield this.supaRead('guitars', 'make', 'Martin', 1);
            waitForIt = yield this.supaRead('todoList', 'todoTxt', 'rain', 1);
            waitForIt = yield this.supaRead('guitars', 'guitarType', 'acoustic', 7);
            console.log(Date.now(), 'bottom of ngOnInit');
            //this.setUrlFileName()
            //this.download666("hello.txt","This is the content of my file :)")
        });
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
        let rows = [
            [55, 'Bob', new Date(), this.totemText],
            [66, 'Ed', new Date(), 'blaBlaBla'],
            [77, 'Ron', new Date()],
            [88, 'Ken', new Date()]
        ];
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
    //   async function sendWorkbook(workbook, response) { 
    //     var fileName = 'FileName.xlsx';
    //     response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    //     response.setHeader("Content-Disposition", "attachment; filename=" + fileName);
    //      await workbook.xlsx.write(response);
    //     response.end();
    // }
    // async supaTodoList() {
    //   //This workers, but now we use generic supaRead
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
    supaRead(tableNameParmIn, colNameParmIn, colValParmIn, limitParmIn) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(Date.now(), 'running supaRead');
            let eMsg = '';
            let { data: supaDataOut, error } = yield this.supaClient
                .from(tableNameParmIn)
                .select('*')
                .limit(limitParmIn)
                .eq(colNameParmIn, colValParmIn);
            if (error) {
                eMsg = error.message;
                this.supaMsg = '250 supabase hickup: ';
                this.supaMsg = this.supaMsg + eMsg;
                throw new Error(eMsg);
            }
            else {
                // we got a result from supabase.
                // clone the array, so I can reference it
                let cloner = (x) => x;
                let myArray = supaDataOut.map(cloner);
                if (myArray.length < 1) {
                    // no supabase data matching our criteria
                    this.supaMsg = 'no data found for: '
                        + tableNameParmIn + ' ' + colNameParmIn + ' ' + colValParmIn;
                    return;
                }
                // myArray myArray.length means we found at least one supabase rec.
                this.supaMsg += ' *** ' + tableNameParmIn + ' ';
                let myColNames = Object.keys(myArray[0]);
                for (let k = 0; k < myArray.length; k++) {
                    let myColVals = Object.values(myArray[k]);
                    console.log(Object.values(myArray[k]));
                    for (let jj = 0; jj < myColNames.length; jj++) {
                        // show all the fields and values from the supabase recs
                        this.supaMsg += ' ' + myColNames[jj] + ': ';
                        this.supaMsg += myColVals[jj];
                    } // end inner for
                } // end outer for
                // let myColVals  = Object.values(myArray[0]) // first rec from supabase
                let i = myColNames.findIndex(c => c == colNameParmIn);
                console.log('282 no error with supaRead');
            }
            console.log(Date.now(), 'bottom of supaRead');
            // .eq(colNameParmIn,"eat a dumptruck full of chocolate")
            // .select(`${sqlParmIn}`) this works, but relies on template literals
            // .select is supposed to be sql for the column names to return.
            // .match({ id: 1})  match works funny, duznt like my parms
            // .filter works funny, hard to understand in and eq
            // .filter(colNameParmIn,'in','("eat a dumptruck full of chocolate","Japan")')
            // .filter(colNameParmIn,'eq','"eat a dumptruck full of chocolate"')
        });
    } // end supaRead
    apiCall() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const responser = yield src_utils_apiRat__WEBPACK_IMPORTED_MODULE_1__.default.getEnvVars();
                return responser;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
} // end appcomponent
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 6, consts: [[1, "hero", "is-primary"], [1, "subtitle"], [1, "subtitley"], [1, "columns"], [1, "column"], [1, "label"], ["readonly", "", "type", "text", 1, "inputy"], ["id", "tryTruck", 1, "tag", "is-small", "is-info", "m-1", "is-clickable", 3, "click"], ["cols", "166", "rows", "11"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " hello from parent app.component.html ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "msgFromBeyond");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "myCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "myFriend");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "gdArray1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "parent app.component.html continued...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " So, what are we trying to do here? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Jun2021 let's try excelJS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " ** Jan 2023 xl disabled, trying supabase. ** xl hogs lotsa mb. ** wish I could find a lightweight spreadsheet writer ** that could do colors like excelJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_span_click_34_listener() { return ctx.tryTruck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Create & Download Spreadsheet Truck.xlxs");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "in dev1, npm install @supabase/supabase-js");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" app title: ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.msgFromBeyond, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.myCount, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.myFriend, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.gdArray1, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("  \n    ", ctx.supaMsg, "\n");
    } }, encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map