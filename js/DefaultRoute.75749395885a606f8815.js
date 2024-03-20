"use strict";(self.webpackChunkwidget_layout=self.webpackChunkwidget_layout||[]).push([[120],{84872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(41556),a=n(13464),r=n(57976),c=n(83812);const o=(0,n(27708).A)({name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0});var i=n(23132),u=n.n(i),m=n(26008),s=n(28880),d=n(9920),p=n(99700),f=function(){return f=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},g=function(){var e=u().useState(!1),t=e[0],n=e[1],i=u().useState(""),p=i[0],g=i[1],E=u().useState(""),v=E[0],h=E[1],w=(0,m.useSetAtom)(s.W),y=(0,m.useSetAtom)(d.Ij),C=(0,m.useAtom)(d.qA),S=C[0],b=C[1],T="console-default",k="custom",x=u().useState((0,d.kH)(S)?T:k),I=x[0],N=x[1],D=function(){n(!t)};return u().createElement(l.ToolbarGroup,{className:"pf-v5-u-flex-direction-column-reverse pf-v5-u-flex-direction-row-reverse-on-md pf-v5-u-flex-direction-row-on-lg"},u().createElement(l.Flex,{className:" pf-v5-u-flex-nowrap pf-v5-u-flex-direction-row-reverse pf-v5-u-flex-direction-row-on-lg"},u().createElement(l.ToolbarItem,{spacer:{default:"spacerNone"}},u().createElement(l.ClipboardCopy,{isCode:!0,hoverTip:"Copy current configuration string",position:"left",clickTip:"Configuration string copied to clipboard"},JSON.stringify(S))),u().createElement(l.ToolbarItem,{spacer:{default:"spacerSm"}},u().createElement(l.Stack,null,u().createElement(l.StackItem,null,u().createElement(l.Dropdown,{isOpen:t,activeItemId:0,onOpenChange:function(e){n(e),N((0,d.kH)(S)?T:k),h("")},toggle:function(e){return u().createElement(l.MenuToggle,{ref:e,onClick:D,isExpanded:t},"Config view: ",I)}},u().createElement(l.DropdownGroup,{label:"Dashboard configuration",labelHeadingLevel:"h3"},u().createElement(l.DropdownList,{className:"pf-v5-u-pb-0"},u().createElement(l.Form,null,u().createElement(l.FormGroup,null,u().createElement(l.DropdownItem,null,u().createElement(l.Radio,{name:"config",id:T,label:T,value:T,onClick:function(e){D(),h(""),N(T),function(e){e.preventDefault(),N(T),b(d.Q9),n(!1),g("")}(e)},checked:I===T})),u().createElement(l.DropdownItem,null,u().createElement(l.Radio,{name:"config",id:k,label:"Custom configuration",value:k,onClick:function(){N(k)},checked:I===k}),u().createElement(l.TextArea,{className:"pf-v5-u-mt-sm",rows:1,placeholder:"Paste custom string",required:!0,onClick:function(){N(k)},onChange:function(e,t){g(t)}}),u().createElement(l.FormHelperText,null,u().createElement(l.HelperText,null,u().createElement(l.HelperTextItem,f({variant:v?"error":"default"},v&&{icon:u().createElement(a.kD,null)}),v))),u().createElement("div",{hidden:I!==k},u().createElement(l.Button,{variant:"plain",type:l.ButtonType.submit,onClick:function(e){if(e.preventDefault(),p)try{var t=JSON.parse(p);(0,d.kH)(t)&&N(T),b(t),n(!1),g("")}catch(e){return console.error(e),void h("Invalid input value.")}else h("Input value is required.")}},u().createElement(r.w$,null)),u().createElement(l.Button,{variant:"plain",type:l.ButtonType.reset,onClick:function(){n(!1),N((0,d.kH)(S)?T:k),h("")}},u().createElement(c.OA,null))))))))))))),u().createElement(l.ToolbarItem,{className:"pf-v5-u-pr-sm pf-v5-u-pr-0-on-lg pf-v5-u-pb-xs pf-v5-u-pb-0-on-lg"},u().createElement(l.Button,{onClick:function(){w((function(e){return!e})),y(S)},variant:"secondary",icon:u().createElement(o,null)},"Add widgets")))};const E=function(){var e=(0,p.c)().currentUser,t=(null==e?void 0:e.first_name)&&(null==e?void 0:e.last_name)?" ".concat(e.first_name," ").concat(e.last_name):null==e?void 0:e.username;return u().createElement(l.PageSection,{className:"widg-c-page__main-section--header pf-v5-u-p-lg pf-v5-u-p-r-0-on-sm",variant:l.PageSectionVariants.light},u().createElement(l.Flex,{className:"widg-l-flex--header",direction:{default:"column",lg:"row"}},u().createElement(l.FlexItem,{alignSelf:{default:"alignSelfFlexStart"}},u().createElement(l.TextContent,null,u().createElement(l.Text,{component:"h1"},"Hi",t?", ".concat(t):"!"),u().createElement(l.Text,{component:"h2",className:"pf-v5-u-mt-0"},"Welcome to your Hybrid Cloud Console."))),u().createElement(l.FlexItem,{align:{default:"alignLeft",lg:"alignRight"}},u().createElement(l.Toolbar,null,u().createElement(l.ToolbarContent,null,u().createElement(g,null))))))}},63312:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(41556),a=n(26008),r=n(23132),c=n.n(r),o=n(28880),i=n(11136),u=n(81800),m=n(68768),s=n(79596),d=n(62644),p=n(46784),f=n(96740),g=function(e){var t=e.title,n=e.widgetType,r=(0,a.useSetAtom)(d.Y),o=c().createElement(l.Tooltip,{content:c().createElement("p",null,"Move widget")},c().createElement(l.Icon,{className:"pf-v5-u-pt-md"},c().createElement(i.Sw,{style:{fill:"#6a6e73"}})));return c().createElement(l.Card,{onDragStart:function(e){var t=e.target.getBoundingClientRect();e.dataTransfer.setDragImage(e.target,e.clientX-t.left,e.clientY-t.top),e.dataTransfer.setData("text",n),r(n)},onDragEnd:function(){return r(void 0)},unselectable:"on",draggable:!0},c().createElement(l.CardHeader,{className:"pf-v5-u-py-md",actions:{actions:o}},c().createElement(l.CardTitle,null,t)))};const E=function(e){var t=e.children,n=(0,a.useAtom)(o.W),r=n[0],d=n[1],E=c().createElement(l.PageSection,{className:"pf-v5-u-p-md pf-v5-u-p-lg-on-sm",style:{backgroundColor:"#E7F1FA"}},c().createElement(l.Split,{className:"widg-l-split--add-widget"},c().createElement(l.SplitItem,{isFilled:!0},c().createElement(l.Title,{headingLevel:"h2",size:"md"},"Add new and previously removed widgets by clicking the ",c().createElement(i.Sw,null)," icon, then drag and drop to a new location. Drag the corners of the cards to resize widgets.")),c().createElement(l.SplitItem,null,c().createElement(l.Button,{variant:"plain",className:"pf-v5-u-pt-0 pf-v5-u-pr-0",onClick:function(){d((function(e){return!e}))},icon:c().createElement(u.O,null)}))),c().createElement(l.Gallery,{className:"widg-l-gallery pf-v5-u-pt-sm",hasGutter:!0},c().createElement(l.GalleryItem,null,c().createElement(g,{widgetType:s.E.LargeWidget,title:"Large widget"},c().createElement(m.c,null))),c().createElement(l.GalleryItem,null,c().createElement(g,{widgetType:s.E.MediumWidget,title:"Medium widget"},c().createElement(p.c,null))),c().createElement(l.GalleryItem,null,c().createElement(g,{widgetType:s.E.SmallWidget,title:"Small widget"},c().createElement(f.c,null)))));return c().createElement(c().Fragment,null,r?c().createElement("div",null,E):null,t)}},86e3:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(41556),a=n(63312),r=n(74312),c=n(26008),o=(0,c.atom)(!1),i=n(84872),u=n(23132),m=n.n(u);const s=function(){var e=(0,c.useAtomValue)(o);return m().createElement(m().Fragment,null,m().createElement(i.default,null),m().createElement(a.default,{dismissible:!1},m().createElement(l.PageSection,{className:"pf-v5-u-p-xs pf-v5-u-p-md-on-sm"},m().createElement(r.default,{isLayoutLocked:e}))))}},28880:(e,t,n)=>{n.d(t,{W:()=>l});var l=(0,n(26008).atom)(!1)}}]);
//# sourceMappingURL=../sourcemaps/DefaultRoute.61dc13e8f13e8bdd818c53ee01ef1fbe.js.map