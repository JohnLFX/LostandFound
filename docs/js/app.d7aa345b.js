(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r={app:0},s=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cac0f5ae"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"5415818f"}[t]+".css",r=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],m.parentNode.removeChild(m),a(s)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/LostandFound/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"331d":function(t,e,a){"use strict";a("492e")},"46a6":function(t,e,a){},"47db":function(t,e,a){"use strict";a("53e3")},"492e":function(t,e,a){},"4fb8":function(t,e,a){"use strict";a("77c2")},"53e3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{dark:"",fixed:"",app:""},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[a("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",n,!1))]}}])},[a("v-toolbar-title",[a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[t._v(" Lost and Found ")])],1),a("v-spacer"),a("ConnectorNavbarIcon"),a("AccountNavbarIcon"),a("DBNavbarIcon")],1),a("v-main",[null!=t.getErrorTitle()?a("v-alert",{staticStyle:{margin:"1%"},attrs:{dense:"",icon:"mdi-database-alert",text:"",outlined:"",color:"deep-orange"}},[a("v-expansion-panels",{attrs:{tile:"",flat:"",accordion:""}},[a("v-expansion-panel",{staticStyle:{"background-color":"transparent"}},[a("v-expansion-panel-header",[a("span",[a("b",[t._v(t._s(t.getErrorTitle()))])])]),a("v-expansion-panel-content",[t._v(" "+t._s(t.getErrorMessage())+" ")])],1)],1),a("v-btn",{attrs:{"x-small":"",right:"",fixed:"",rounded:"",color:"info"},on:{click:function(e){return t.resetError()}}},[t._v("Dismiss ")])],1):t._e(),a("router-view",{staticClass:"router-view"})],1),a("v-footer",{attrs:{dark:"",padless:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Lost and Found")])])],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.refreshing_databases?a("v-btn",{attrs:{title:"Loading Database List",disabled:"",icon:""}},[a("v-icon",[t._v("mdi-database-sync")])],1):a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",disabled:null==t.databaseAPI}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-database")])],1)]}}])},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""},on:{click:t.dbSettingsAction}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-database-cog")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Settings")])],1)],1),a("v-divider"),t._l(t.databases,(function(e){return a("v-list-item",{key:e.id,attrs:{link:""},on:{click:function(a){return t.selectDatabaseAction(e.id)}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-database")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))])],1)],1)}))],2)],1)},o=[],c=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[this.database?a("div",[t.refreshing_items?a("v-card",{staticClass:"d-flex align-center justify-center",attrs:{flat:""}},[a("v-progress-circular",{staticClass:"page-loader",attrs:{indeterminate:"",size:30,color:"primary"}}),a("v-card-subtitle",[t._v("Loading Items")])],1):a("div",[a("v-app-bar",{staticClass:"item-navbar",attrs:{dense:"",flat:"",rounded:""}},[a("v-btn",{staticStyle:{"margin-right":"20px"},attrs:{color:"primary",small:"",disabled:t.items.some((function(t){return t.id<0}))},on:{click:function(e){return t.newItemAction()}}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-plus ")]),t._v(" Item ")],1),a("v-text-field",{staticStyle:{"max-width":"250px"},attrs:{"hide-details":"",flat:"",dense:"",clearable:"",placeholder:"Search"},model:{value:t.search_query,callback:function(e){t.search_query=e},expression:"search_query"}},[a("v-icon",{attrs:{slot:"prepend-inner"},slot:"prepend-inner"},[t._v(" mdi-magnify ")])],1),a("TagSelectorCombobox",{staticStyle:{"margin-left":"20px","padding-right":"20px"},attrs:{display_label:"Tag Filter",tag_selection:[],available_tags:this.database.tags},on:{tagListChange:t.updateTagList}}),a("v-spacer"),a("v-select",{staticStyle:{"max-width":"110px","margin-right":"15px"},attrs:{placeholder:"View As",disabled:"",flat:"",solo:"",dense:"","hide-details":"",outlined:"",items:t.view_methods},model:{value:t.view_as,callback:function(e){t.view_as=e},expression:"view_as"}}),a("v-select",{staticStyle:{"max-width":"120px"},attrs:{placeholder:"Sort By",flat:"",solo:"",outlined:"",dense:"","hide-details":"",items:t.sort_method_names},model:{value:t.sort_by,callback:function(e){t.sort_by=e},expression:"sort_by"}})],1),t.items&&(t.items.length>0||this.database&&this.database.items&&this.database.items.length>0)?a("div",[a("v-alert",{staticClass:"item-navbar-info-alert",attrs:{text:"",dense:"",type:"info"}},[t._v("Showing "+t._s(t.items.length)+" out of "+t._s(this.database.items.length)+" items ")]),a("v-layout",{attrs:{wrap:""}},t._l(t.items.slice(t.items_per_page*(t.page-1),t.items_per_page*t.page),(function(e){return a("ItemView",{key:e.id,attrs:{item:e,database:t.database},on:{exitEditMode:function(e){t.items=t.items.filter((function(t){return t.id>=0}))},itemSaved:t.itemSavedEvent,itemDeleted:t.itemDeletedEvent}})})),1),a("div",{staticClass:"text-center"},[t.items.length>t.items_per_page?a("v-pagination",{attrs:{color:"primary",length:t.items.length/t.items_per_page},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1):a("div",{staticClass:"no-item-alert"},[a("v-alert",{attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[t._v(" There are no items in "+t._s(this.database?this.database.name:"this database")+" ")])],1)],1)],1):a("div",{staticClass:"no-item-alert"},[a("v-alert",{attrs:{border:"top","colored-border":"",type:"info",elevation:"2"}},[a("p",[t._v("No database selected")]),t._v(" In the navigation menu, top right: "),a("ol",[a("li",[t._v("First choose your "),a("v-icon",[t._v("mdi-connection")]),t._v(" connection ")],1),a("li",[t._v("Then, choose your "),a("v-icon",[t._v("mdi-database")]),t._v(" database ")],1)])])],1)])},u=[],d=(a("25f0"),a("b0c0"),a("7db0"),a("4e827"),a("fb6a"),a("4de4"),a("caad"),a("2532"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",staticClass:"mx-auto",attrs:{onsubmit:"return false;"}},[n("v-card",{staticClass:"mx-auto mb-4",attrs:{"max-width":"300px"}},[n("v-img",{attrs:{src:null!=(t.editing?t.item_editable.base64Img:t.item.base64Img)?t.editing?t.item_editable.base64Img:t.item.base64Img:a("9889"),"max-height":"200px"}},[t.editing?[n("v-row",{staticClass:"fill-height ma-0 image-edit-overlay",attrs:{align:"center",justify:"center"},on:{click:function(e){return t.$refs.icon_upload.click()}}},[n("v-icon",{attrs:{dark:"",size:"64"}},[t._v("mdi-camera-outline")]),n("input",{ref:"icon_upload",attrs:{id:"icon_upload",name:"icon_upload",hidden:"",accept:"image/*",type:"file"},on:{change:t.processImageUpload}})],1)]:t._e()],2),t.editing?n("v-card-title",[n("v-text-field",{attrs:{label:"Title",required:"",rules:[function(t){return!!t||"Required."}]},model:{value:t.item_editable.title,callback:function(e){t.$set(t.item_editable,"title",e)},expression:"item_editable.title"}})],1):n("v-card-title",[t._v(t._s(t.item.title))]),n("v-card-subtitle",[n("span",[t._v(t._s(t.formatDate(t.item.created)))]),t.editing?n("div",[n("br"),n("TagSelectorCombobox",{attrs:{tag_selection:t.item.tags,available_tags:t.database.tags},on:{tagListChange:t.updateTagList}})],1):n("div",[t._l(t.item.tags,(function(e,a){return n("v-btn",{key:a,staticClass:"white--text",staticStyle:{"margin-right":"5px",float:"left"},attrs:{tile:"",depressed:"",rounded:"","x-small":"",color:e.color}},[t._v(t._s(e.text)+" ")])})),t.item.tags&&t.item.tags.length>0?n("br"):t._e()],2)]),t.editing?n("v-card-text",[n("v-textarea",{attrs:{label:"Item Comment","auto-grow":"","hide-details":"","single-line":"",rows:"1"},model:{value:t.item_editable.comment,callback:function(e){t.$set(t.item_editable,"comment",e)},expression:"item_editable.comment"}})],1):n("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.item.comment,expression:"item.comment"}]},[t._v(t._s(t.item.comment))]),n("v-card-actions",[t.editing?n("v-btn",{attrs:{type:"submit",color:"primary",disabled:t.saving_item||t.deleting_item,loading:t.saving_item,text:""},on:{click:function(e){return t.save()}}},[t._v(" Save ")]):n("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){return t.enterEditMode()}}},[t._v("Edit")]),n("v-spacer"),n("ConfirmationDialog",{ref:"deleteConfirmDialog",attrs:{title:"Confirm Deletion",description:"Are you sure you want to delete this item?"},on:{onResult:t.deleteAction}}),t.editing?n("v-btn",{attrs:{color:"error",disabled:t.deleting_item||t.saving_item,loading:t.deleting_item,text:""},on:{click:function(e){return t.$refs.deleteConfirmDialog.showDialog()}}},[t._v("Delete ")]):t._e(),t.editing?n("v-btn",{attrs:{color:"blue-grey",disabled:t.saving_item||t.deleting_item,text:""},on:{click:function(e){return t.exitEditMode()}}},[t._v(" Cancel ")]):t._e()],1)],1),n("v-snackbar",{attrs:{timeout:t.timeout,color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.snackbar_message))])])],1)}),m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-combobox",{attrs:{"hide-details":"",filter:t.filter,"hide-no-data":!t.search,items:t.items,"search-input":t.search,"hide-selected":"",label:t.label,flat:"",dense:"",multiple:"","small-chips":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-list-item",[a("span",{staticClass:"subheading"},[a("i",[t._v("No tag found")])])])]},proxy:!0},{key:"selection",fn:function(e){var n=e.attrs,i=e.item,r=e.parent,s=e.selected;return[i===Object(i)?a("v-chip",t._b({attrs:{color:i.color,"text-color":"white","input-value":s,label:"",small:""}},"v-chip",n,!1),[a("span",{staticClass:"pr-2"},[i.icon?a("v-icon",{attrs:{small:""}},[t._v(t._s(i.icon))]):t._e(),t._v(" "+t._s(i.text)+" ")],1),a("v-icon",{attrs:{small:""},on:{click:function(t){return r.selectItem(i)}}},[t._v(" $delete ")])],1):t._e()]}},{key:"item",fn:function(e){e.index;var n=e.item;return[a("v-chip",{attrs:{color:n.color,"text-color":"white",label:"",small:""}},[n.icon?a("v-icon",{attrs:{small:""}},[t._v(t._s(n.icon))]):t._e(),t._v(" "+t._s(n.text)+" ")],1)]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})},g=[],h={props:["tag_selection","available_tags","display_label"],emits:["tagListChange"],name:"TagSelectorCombobox",data:function(){return{label:"Item Tags",activator:null,attach:null,menu:!1,model:[],items:[],x:0,y:0,search:null}},mounted:function(){this.display_label&&(this.label=this.display_label),this.available_tags?this.items=this.available_tags:this.items=[],this.model=this.tag_selection},watch:{model:function(t){var e=this;this.$emit("tagListChange",t.filter((function(t){return e.items.includes(t)})))}},methods:{filter:function(t,e,a){var n=function(t){return null!=t?t:""},i=n(a),r=n(e);return i.toString().toLowerCase().indexOf(r.toString().toLowerCase())>-1}}},v=h,b=a("2877"),p=a("6544"),_=a.n(p),A=a("cc20"),x=a("2b5d"),y=a("132d"),k=a("da13"),I=Object(b["a"])(v,f,g,!1,null,"5e2d492b",null),w=I.exports;_()(I,{VChip:A["a"],VCombobox:x["a"],VIcon:y["a"],VListItem:k["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" "+t._s(t.title)+" ")]),a("v-card-text",[t._v(t._s(t.description))]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.onDecision(!0)}}},[t._v(" Confirm ")]),a("v-spacer"),a("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(e){return t.onDecision(!1)}}},[t._v(" Cancel ")])],1)],1)],1)],1)},D=[],E={name:"ConfirmationDialog",props:["title","description"],data:function(){return{dialog:!1}},methods:{showDialog:function(){this.dialog=!0},hideDialog:function(){this.dialog=!1},onDecision:function(t){this.hideDialog(),this.$emit("onResult",t)}}},V=E,B=a("8336"),S=a("b0af"),O=a("99d9"),Q=a("169a"),F=a("ce7e"),j=a("2fa4"),P=Object(b["a"])(V,C,D,!1,null,"6c6c0712",null),L=P.exports;_()(P,{VBtn:B["a"],VCard:S["a"],VCardActions:O["a"],VCardText:O["c"],VCardTitle:O["d"],VDialog:Q["a"],VDivider:F["a"],VSpacer:j["a"]});var T={name:"ItemView",props:["item","database"],emits:["exitEditMode","itemSaved","itemDeleted"],data:function(){return{saving_item:!1,deleting_item:!1,snackbar:!1,snackbar_message:"",timeout:3e3,editing:this.item.id<0,item_editable:Object.assign({},this.item)}},methods:{updateTagList:function(t){this.item_editable.tags=t},enterEditMode:function(){this.editing=!0},exitEditMode:function(){this.editing=!1,this.$emit("exitEditMode")},save:function(){var t=this;this.saving_item||this.$refs.form.validate()&&(this.saving_item=!0,this.$store.getters.databaseAPI.storeItem(this.database.id,this.item_editable).then((function(){t.snackbar_message="Saved Successfully",t.snackbar=!0,t.exitEditMode(),t.$emit("itemSaved",t.item_editable)})).catch((function(e){t.$store.commit("updateError",{exception:e,title:"Failed to save item",message:e.message})})).finally((function(){t.saving_item=!1})))},formatDate:function(t){var e=new Date(t);return e.toLocaleString()},deleteAction:function(t){var e=this;if(t){if(this.deleting_item)return;this.deleting_item=!0,this.$store.getters.databaseAPI.deleteItem(this.database.id,this.item_editable.id).then((function(){e.snackbar_message="Deleted Successfully",e.snackbar=!0,e.exitEditMode(),e.$emit("itemDeleted",e.item_editable)})).catch((function(t){e.$store.commit("updateError",{exception:t,title:"Failed to delete item",message:t.message})})).finally((function(){e.deleting_item=!1}))}},processImageUpload:function(t){var e=this,a=t.target.files[0],n=new FileReader;n.readAsDataURL(a),n.onload=function(){e.item_editable.base64Img=n.result},n.onerror=function(t){this.$store.commit("updateError",{exception:t,title:"Failed to process image",message:t.message})}}},components:{ConfirmationDialog:L,TagSelectorCombobox:w}},U=T,N=(a("47db"),a("4bd4")),K=a("adda"),R=a("0fd9"),$=a("2db4"),M=a("8654"),z=a("a844"),H=Object(b["a"])(U,d,m,!1,null,"d205d978",null),q=H.exports;_()(H,{VBtn:B["a"],VCard:S["a"],VCardActions:O["a"],VCardSubtitle:O["b"],VCardText:O["c"],VCardTitle:O["d"],VForm:N["a"],VIcon:y["a"],VImg:K["a"],VRow:R["a"],VSnackbar:$["a"],VSpacer:j["a"],VTextField:M["a"],VTextarea:z["a"]});var X=a("d944"),G={name:"Dashboard",components:{TagSelectorCombobox:w,ItemView:q},data:function(){return{page:1,items_per_page:20,items:[],refreshing_items:!1,sort_by:null,sort_methods:[{name:"A-Z",comparator:function(t,e){return t.title.toString().localeCompare(e.title.toString())}},{name:"Z-A",comparator:function(t,e){return e.title.toString().localeCompare(t.title.toString())}}],view_as:null,view_methods:["Cards","Table"],search_query:null,search_tags:[]}},mounted:function(){var t=this;this.$nextTick((function(){t.fetchItems()}))},computed:{database:{get:function(){if(1===this.$store.state.databases.length)return this.$store.state.databases[0];var t=parseInt(this.$route.query.db);return isNaN(t)?null:(console.log("Selected DB ID: "+t),this.$store.getters.getDatabaseById(t))}},sort_method_names:{get:function(){for(var t=[],e=0;e<this.sort_methods.length;e++){var a=this.sort_methods[e];t.push(a.name)}return t}}},watch:{database:function(t){t&&this.fetchItems()},sort_by:function(t){var e=this.sort_methods.find((function(e){return e.name===t}));e&&this.items.sort(e.comparator)},search_query:function(){this.processFilters()},search_tags:function(){this.processFilters()}},methods:{fetchItems:function(){var t=this;this.$store.getters.databaseAPI&&this.database&&(this.refreshing_items||(console.log("Fetching items"),this.page=1,this.refreshing_items=!0,this.search_query=null,this.search_tags=null,this.$store.getters.databaseAPI.populateDetails(this.database).then((function(e){t.$store.commit("updateDatabaseEntry",e),t.processFilters()})).catch((function(e){t.$store.commit("updateError",{exception:e,title:"Failed to refresh items",message:e.message})})).finally((function(){t.refreshing_items=!1}))))},processFilters:function(){var t=this;if(console.log("update filters"),this.page=1,this.items=this.database&&this.database.items?this.database.items.slice(0):[],this.search_query){var e=this.search_query.toLowerCase();this.items=this.database.items.filter((function(t){return t.title.toLowerCase().includes(e)}))}if(this.search_tags)for(var a=function(e){var a=t.search_tags[e];t.items=t.items.filter((function(t){for(var e=0;e<t.tags.length;e++){var n=t.tags[e];if(n.equals(a))return!0}return!1}))},n=0;n<this.search_tags.length;n++)a(n)},updateTagList:function(t){console.log(t),this.search_tags=t||[]},itemSavedEvent:function(t){console.log("itemSavedEvent",t);for(var e=!1,a=0;a<this.database.items.length;a++)if(this.database.items[a].id===t.id){this.database.items[a]=t,e=!0;break}e||this.database.items.unshift(t),e=!1;for(var n=0;n<this.items.length;n++)if(this.items[n].id===t.id){this.items[n]=t,e=!0;break}e||this.items.unshift(t)},itemDeletedEvent:function(t){console.log("itemDeletedEvent",t),this.database.items=this.database.items.filter((function(e){return e.id!==t.id})),this.items=this.items.filter((function(e){return e.id!==t.id}))},newItemAction:function(){this.page=1;for(var t=new X["b"],e=0;e<this.items.length;e++)this.items[e].id<t.id&&(t.id=this.items[e].id-1);this.items.unshift(t)}}},J=G,W=(a("9eb8"),a("0798")),Z=a("40dc"),Y=a("a722"),tt=a("891e"),et=a("490a"),at=a("b974"),nt=Object(b["a"])(J,l,u,!1,null,"1f23adde",null),it=nt.exports;_()(nt,{VAlert:W["a"],VAppBar:Z["a"],VBtn:B["a"],VCard:S["a"],VCardSubtitle:O["b"],VIcon:y["a"],VLayout:Y["a"],VPagination:tt["a"],VProgressCircular:et["a"],VSelect:at["a"],VSpacer:j["a"],VTextField:M["a"]});var rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"text"},[a("h2",{staticStyle:{color:"orangered"}},[t._v("404 Not Found")])])])}],ot={name:"NotFound"},ct=ot,lt=(a("4fb8"),Object(b["a"])(ct,rt,st,!1,null,"6ce2bfc8",null)),ut=lt.exports;n["a"].use(c["a"]);var dt=[{path:"/",name:"Dashboard",component:it},{path:"/db_settings",name:"Database Settings",component:function(){return a.e("about").then(a.bind(null,"e13b"))}},{path:"*",component:ut}],mt=new c["a"]({routes:dt}),ft=mt,gt=a("a70a"),ht={name:"DBNavbarIcon",data:function(){return{refreshing_databases:!1}},created:function(){var t=this;gt["a"].$on("database-created-event",(function(){t.refreshList()}))},mounted:function(){var t=this;this.$nextTick((function(){t.refreshList()}))},computed:{databases:{get:function(){return this.$store.state.databases}},databaseAPI:{get:function(){return this.$store.getters.databaseAPI}}},watch:{databaseAPI:function(){this.refreshList()}},methods:{refreshList:function(){var t=this;null!=this.databaseAPI&&(this.refreshing_databases||(this.refreshing_databases=!0,this.$store.getters.databaseAPI.listDatabases().then((function(e){t.$store.commit("updateDatabases",e),0===e.length&&t.dbSettingsAction()})).catch((function(e){t.$store.commit("updateError",{exception:e,title:"Failed to refresh database list",message:e.message})})).finally((function(){t.refreshing_databases=!1}))))},selectDatabaseAction:function(t){this.$route.query.db!=t&&ft.push({path:"/",query:{db:t}})},dbSettingsAction:function(){"/db_settings"!==this.$route.path&&ft.push("/db_settings")}}},vt=ht,bt=a("8860"),pt=a("5d23"),_t=a("34c3"),At=a("e449"),xt=Object(b["a"])(vt,s,o,!1,null,"933f8e66",null),yt=xt.exports;_()(xt,{VBtn:B["a"],VDivider:F["a"],VIcon:y["a"],VList:bt["a"],VListItem:k["a"],VListItemContent:pt["a"],VListItemIcon:_t["a"],VListItemTitle:pt["c"],VMenu:At["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),n),[a("v-icon",{attrs:{color:null==t.databaseAPI?"error":""}},[t._v("mdi-connection")])],1)]}}])},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{dense:""}},[a("v-list-item-content",[a("v-list-item-title",[a("i",[t._v("Connect to...")])])],1)],1),a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.selectConnector(0)}}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:t.usingLocalDevice?"primary":""}},[t._v("mdi-laptop")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Local Device")])],1)],1),a("v-list-item",{attrs:{link:"",disabled:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-server-network")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("External Server")]),a("v-list-item-subtitle",[a("i",[t._v("To be added")])])],1)],1),a("v-divider"),a("v-list-item",{attrs:{link:"",disabled:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-school")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("University")]),a("v-list-item-subtitle",[a("i",[t._v("To be added")])])],1)],1)],1)],1)},It=[],wt=a("1da1"),Ct=a("d4ec"),Dt=a("bee2"),Et=(a("96cf"),a("e9c4"),function(){function t(){Object(Ct["a"])(this,t)}return Object(Dt["a"])(t,[{key:"listDatabases",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(){var e,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,2e3)}));case 2:for(e=[],a=this.getMasterDB(),n=0;n<a.length;n++)i=a[n],e.push(new X["a"](i.id,i.name));return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"storeItem",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,i,r,s,o,c,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,2e3)}));case 2:n=this.getMasterDB(),console.log("store item",a),i=0;case 5:if(!(i<n.length)){t.next=26;break}if(n[i].id!==e){t.next=23;break}r=n[i],r.items||(r.items=[]),s=!1,o=0;case 11:if(!(o<r.items.length)){t.next=20;break}if(c=r.items[o],a.id!==c.id){t.next=17;break}return r.items[o]=a,s=!0,t.abrupt("break",20);case 17:o++,t.next=11;break;case 20:if(!s){for(l=0,u=0;u<r.items.length;u++)r.items[u].id>=l&&(l=r.items[u].id+1);a.id=l,r.items.push(a)}return localStorage.setItem("lf_master_db",JSON.stringify(n)),t.abrupt("return");case 23:i++,t.next=5;break;case 26:throw new TypeError("No database found for ID "+e);case 27:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"deleteItem",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,2e3)}));case 2:n=this.getMasterDB(),i=0;case 4:if(!(i<n.length)){t.next=12;break}if(n[i].id!==e){t.next=9;break}return r=n[i],r.items&&(r.items=r.items.filter((function(t){return t.id!==a})),localStorage.setItem("lf_master_db",JSON.stringify(n))),t.abrupt("return");case 9:i++,t.next=4;break;case 12:throw new TypeError("No database found for ID "+e);case 13:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"populateDetails",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,r,s,o,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,2e3)}));case 2:if(a=this.getSavedDB_ByID(e.id),e.items=[],e.tags=[],null!=a){if(a.tags)for(n=0;n<a.tags.length;n++)i=a.tags[n],e.tags.push(new X["c"](i.icon,i.text,i.id,i.color));if(a.items)for(r=0;r<a.items.length;r++){for(s=a.items[r],o=new X["b"](s.id,s.title,s.comment,s.base64Img,[],s.created),c=0;c<s.tags.length;c++)l=s.tags[c],console.log("new raw tag",l),o.tags.push(new X["c"](l.icon,l.text,l.id,l.color));e.items.push(o)}}return console.log("populate details",e),t.abrupt("return",e);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"createDatabase",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=this.getMasterDB(),n={id:0,name:e,items:[]},i=0;i<a.length;i++)r=a[i],r.id>=n.id&&(n.id=r.id+1);a.push(n),s=JSON.stringify(a),console.log("saving",s),localStorage.setItem("lf_master_db",s);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"storeTags",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,i,r,s,o,c,l,u,d,m,f,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Array.isArray(a)||0!==a.length){t.next=2;break}return t.abrupt("return");case 2:n=this.getMasterDB(),i=null,r=0;case 5:if(!(r<n.length)){t.next=12;break}if(n[r].id!==e){t.next=9;break}return i=n[r],t.abrupt("break",12);case 9:r++,t.next=5;break;case 12:if(null==i){t.next=44;break}Array.isArray(a)||(s=a,a=[],a.push(s)),o=0;case 15:if(!(o<a.length)){t.next=40;break}if(c=a[o],!(c.id<0)){t.next=24;break}if(l=0,i.tags)for(u=0;u<i.tags.length;u++)d=i.tags[u],d.id>=l&&(l=d.id+1);else i.tags=[];c.id=l++,i.tags.push(c),t.next=37;break;case 24:m=!1,f=0;case 26:if(!(f<i.tags.length)){t.next=35;break}if(g=i.tags[f],g.id!==c.id){t.next=32;break}return i.tags[f]=c,m=!0,t.abrupt("break",35);case 32:f++,t.next=26;break;case 35:if(m){t.next=37;break}throw new TypeError("No tag found for ID "+c.id);case 37:o++,t.next=15;break;case 40:console.log("new tag list to commit",JSON.stringify(n)),localStorage.setItem("lf_master_db",JSON.stringify(n)),t.next=45;break;case 44:throw new TypeError("No database found for ID "+e);case 45:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"deleteTags",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,i,r,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==a.length){t.next=2;break}return t.abrupt("return");case 2:n=this.getMasterDB(),i=0;case 4:if(!(i<n.length)){t.next=13;break}if(n[i].id!==e){t.next=10;break}if(r=n[i],r.items)for(s=0;s<r.items.length;s++)o=r.items[s],o.tags=o.tags.filter((function(t){return!a.includes(t.id)}));return r.tags&&(r.tags=r.tags.filter((function(t){return!a.includes(t.id)})),localStorage.setItem("lf_master_db",JSON.stringify(n))),t.abrupt("return");case 10:i++,t.next=4;break;case 13:throw new TypeError("No database found for ID "+e);case 14:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"updateDBName",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this.getMasterDB(),i=0;case 2:if(!(i<n.length)){t.next=11;break}if(n[i].id!==e){t.next=8;break}return r=n[i],r.name=a,localStorage.setItem("lf_master_db",JSON.stringify(n)),t.abrupt("break",11);case 8:i++,t.next=2;break;case 11:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"deleteDatabase",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=this.getMasterDB(),console.log("deleteDatabase",e),a=a.filter((function(t){return t.id!==e})),localStorage.setItem("lf_master_db",JSON.stringify(a));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getSavedDB_ByID",value:function(t){for(var e=null,a=this.getMasterDB(),n=0;n<a.length;n++)if(a[n].id===t){e=a[n];break}return e}},{key:"getMasterDB",value:function(){var t=localStorage.getItem("lf_master_db");if(console.log("getting",t),!t)return[];try{return JSON.parse(t)}catch(e){return console.log("Corrupt local storage DB",e),[]}}}]),t}()),Vt=function(){function t(){Object(Ct["a"])(this,t)}return Object(Dt["a"])(t,[{key:"listDatabases",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:throw TypeError("Not implemented");case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"populateItems",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:throw TypeError("Not implemented");case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"createDatabase",value:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:throw TypeError("Not implemented");case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),Bt={name:"ConnectorNavbarIcon",data:function(){return{}},computed:{databaseAPI:{get:function(){return this.$store.state.databaseAPI}},usingLocalDevice:{get:function(){return this.databaseAPI instanceof Et}},usingLFCloud:{get:function(){return this.databaseAPI instanceof Vt}}},methods:{selectConnector:function(t){switch(t){case 1:console.log("Selected LF Backend Connector"),this.$store.commit("setDatabaseImplementation",new Vt);break;default:console.log("Selected Local Device Connector"),this.$store.commit("setDatabaseImplementation",new Et);break}}}},St=Bt,Ot=Object(b["a"])(St,kt,It,!1,null,"5e95c5de",null),Qt=Ot.exports;_()(Ot,{VBtn:B["a"],VDivider:F["a"],VIcon:y["a"],VList:bt["a"],VListItem:k["a"],VListItemContent:pt["a"],VListItemIcon:_t["a"],VListItemSubtitle:pt["b"],VListItemTitle:pt["c"],VMenu:At["a"]});var Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null==t.databaseAPI||t.usingLocalDevice?t._e():a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-account")])],1)]}}],null,!1,1415903684)},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-login")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Login")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-logout")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1)},jt=[],Pt={name:"AccountNavbarIcon",data:function(){return{}},computed:{databaseAPI:{get:function(){return this.$store.state.databaseAPI}},usingLocalDevice:{get:function(){return this.databaseAPI instanceof Et}}}},Lt=Pt,Tt=Object(b["a"])(Lt,Ft,jt,!1,null,"7cb94b92",null),Ut=Tt.exports;_()(Tt,{VBtn:B["a"],VIcon:y["a"],VList:bt["a"],VListItem:k["a"],VListItemContent:pt["a"],VListItemIcon:_t["a"],VListItemTitle:pt["c"],VMenu:At["a"]});var Nt={name:"App",components:{AccountNavbarIcon:Ut,ConnectorNavbarIcon:Qt,DBNavbarIcon:yt},data:function(){return{}},methods:{resetError:function(){this.$store.commit("updateError",{exception:null,title:null,message:null})},getErrorTitle:function(){return this.$store.state.error.title},getErrorMessage:function(){return this.$store.state.error.message}}},Kt=Nt,Rt=(a("331d"),a("7496")),$t=a("62ad"),Mt=a("cd55"),zt=a("49e2"),Ht=a("c865"),qt=a("0393"),Xt=a("553a"),Gt=a("f6c4"),Jt=a("2a7f"),Wt=Object(b["a"])(Kt,i,r,!1,null,"360dfc96",null),Zt=Wt.exports;_()(Wt,{VAlert:W["a"],VApp:Rt["a"],VAppBar:Z["a"],VBtn:B["a"],VCol:$t["a"],VExpansionPanel:Mt["a"],VExpansionPanelContent:zt["a"],VExpansionPanelHeader:Ht["a"],VExpansionPanels:qt["a"],VFooter:Xt["a"],VImg:K["a"],VMain:Gt["a"],VSpacer:j["a"],VToolbarTitle:Jt["a"]});var Yt=a("f309");n["a"].use(Yt["a"]);var te=new Yt["a"]({}),ee=a("2f62");n["a"].use(ee["a"]);var ae=new ee["a"].Store({state:{error:{title:null,message:null},databaseAPI:null,databases:[]},mutations:{setDatabaseImplementation:function(t,e){t.databaseAPI=e,t.databases=[]},updateError:function(t,e){null!=e&&null!=e.exception&&console.log(e.exception),t.error.title=e.title,t.error.message=e.message},updateDatabaseEntry:function(t,e){for(var a=0;a<t.databases.length;a++){var n=t.databases[a];if(n.id===e.id){t.databases[a]=e;break}}},updateDatabases:function(t,e){t.databases=e,console.log("New DB List",t.databases)}},getters:{databaseAPI:function(t){return t.databaseAPI},getDatabaseById:function(t){return function(e){return t.databases.find((function(t){return t.id===e}))}}}}),ne=ae;n["a"].config.productionTip=!1,n["a"].config.errorHandler=function(t,e,a){this.$store.commit("updateError",{exception:t,title:"Vue UI Render Error",message:a})},new n["a"]({vuetify:te,router:ft,store:ne,render:function(t){return t(Zt)}}).$mount("#app")},"77c2":function(t,e,a){},9889:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAT+SURBVHhe7doxbxNZGIVhswVUUJGKCiqo4P//BJQiHR1UVFBBBQ2r483dHUbjw80qsSDzPFLkEN8kvsr3jmeMH1xeXv44AJv+ur4FNggECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBAKFQKAQCBQCgUIgUAgECoFAIRAoBALFg8vLyx/Xn9973759O3z8+PHw5cuX478fPXp0ePHixfF27dOnT8e1379/Pzx8+PDw7Nmzw8XFxfW9/5ldd1tusof4Xffxp9hVIFdXV/8OQOTzeP369U8DlkHJR2TtWPf8+fOfhmZ23W2a3UP8zvv4U+zmFCsDkD/806dPD2/evDl+5Cg57hvGETqDkqHLupcvXx7v+z/rblN+7swe4nfex59kN4GMU5IxUDE+H/fFct04Ij958uQ4lBnOcf/surWcyrx9+/bw/v3766/8Y3y9DeXydw5be4jZxze7bq92E0iOlDlKrk9D8rUMwvD58+fjbYZkKQMTX79+Pd7OrlvLKUt+Z75/OXzjKL4c/rXZPcRd72MvdhNIBm9r+DJYGbAhQxjrIRz/HvfPrtuSi+oYzxa5zeNoccTsHuIc+9iD3QSSI/f6gjOnNbE+eq6HbWk5MLPr1vL7Hj9+fDw6j1eP8rN+dUF8kz3EXe9jD3YTyFqG8sOHD8fPl0fl9anKsD6izq47ZfzOrccw69Qe4lz7uO92GUgukMdRO6/YjGGIU0fTMShj7ey6U3LEH+f5eTb51bPHWttDnGsf992uAskfPf+PkAvTDOWrV682T01OHVVjOTCz604ZF+ljGGfM7iHOtY/7bFeB5KibYciRO4O19ccfX1sP7Rjmcf/sulNy7ZDHkiN4bvNsMGNmD3Gufdx3uwkkA5mL4gzWeBVpyzjtGQMyjJc7c9SO2XWnjNOjDHlu8+/1kK7N7iHOtY/7bjeBjNf7f3UxPE5XlgOb4cn3Z5DH/bPrtuR78iyQ644cocf1R77ezO4hzrGPPdjNe7HW72Fay1sshgzLGNasz/fFbbyHKUP47t274+fL3zke39Z7qoab7CHuch97sZtnkPFHz+3Wx1KO0BmOMSy53RqW2XVLOTJn7dbPijGoW8bjzO3Wx9pd7mMvdvVuXripXb2KBTclECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhECgEAoVAoBAIFAKBQiBQCAQKgUAhEDjpcPgb+WDqQzzB/cYAAAAASUVORK5CYII="},"9eb8":function(t,e,a){"use strict";a("46a6")},a70a:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("2b0e"),i=new n["a"]},d944:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return o}));var n=a("d4ec"),i=a("bee2"),r=(a("b0c0"),function(){function t(e,a,i,r){Object(n["a"])(this,t),this.icon=e,this.text=a,this.id=i,this.color=r}return Object(i["a"])(t,[{key:"equals",value:function(e){return e===this||e instanceof t&&e.id===this.id}},{key:"toString",value:function(){return this.text}}]),t}()),s=Object(i["a"])((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new Date;Object(n["a"])(this,t),this.id=e,this.title=a,this.comment=i,this.base64Img=r,this.tags=s,this.created=o})),o=Object(i["a"])((function t(e,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(n["a"])(this,t),this.id=e,this.name=a,this.items=i,this.tags=r}))}});
//# sourceMappingURL=app.d7aa345b.js.map