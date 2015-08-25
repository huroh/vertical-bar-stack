function verticalBarStack(){function a(a){a.each(function(a){function s(){i=$("#"+b).width(),k=$("#"+b).height()-l.top-l.bottom,i||(i=j),k||(k=minHeight),p.range([0,k])}function t(){s();var a=z;a.select("rect").transition().delay(function(a,b){return 50*b}).duration(1e3).attr("fill",function(a){return a.color?a.color:c[a.type]}).attr("width",function(){return m}).attr("y",function(a){return p(a.y0)}).attr("x",function(a){return"left"==r?i-m-n:a.hasOwnProperty("user")&&1==a.user?n:i+m+n}).attr("height",function(a){return p(d(a))}).attr("fill-opacity",function(a){return"right"==r&&a.hasOwnProperty("user")&&0==a.user?0:.8}),a.select("text").transition().delay(function(a,b){return 50*b}).duration(1e3).attr("style","font-size:"+q+"px;font-family:Oswald,Sans-serif;fill:black").attr("x",function(a){return"left"==r?i-m-n-o:a.hasOwnProperty("user")&&1==a.user?m+n+o:i+m+n}).attr("y",function(a){return p(a.y0)+p(d(a))/2}).attr("fill-opacity",function(a){return"right"==r&&a.hasOwnProperty("user")&&0==a.user?0:.8})}function u(a,b){var c=a.replace(/\(.*?\)/,"");return c.length>b&&(c=c.substr(0,b-3)+"..."),c}function v(){d3.select(this).transition().duration(200).attr("x",function(a){return"left"==r?i-m-n:a.hasOwnProperty("user")&&1==a.user?n-n:i+m+n}).attr("width",m+n).attr("fill-opacity",1)}function w(){d3.select(this).transition().duration(200).attr("x",function(a){return"left"==r?i-m-n:a.hasOwnProperty("user")&&1==a.user?n:i+m+n}).attr("width",m).attr("fill-opacity",.8)}{var x=d3.select(this).selectAll("svg").data([a]);x.enter().append("svg").attr("class","BlinkersVerticalBarStack").attr("width",i).attr("height",k).append("g").attr("transform","translate("+l.left+","+l.top+")")}x.call(f),s(),p.domain([0,d3.sum(a,function(a){return d(a)})+n*a.length]),p.range([0,k]),a=a.sort(function(a,b){return d(b)-d(a)});var y=0;a.forEach(function(a){a.y0=y,y=y+d(a)+n});var z=x.selectAll(".bar").data(a,function(a){return e(a)}),A=z.enter().insert("g",".axis").attr("class","bar").attr("fill-opacity",.8);A.append("rect").attr("width",0).attr("y",function(a){return p(a.y0)}).attr("x",function(){return"left"==r?0:i}).attr("height",function(a){return p(d(a))}).on("mouseover.grow",v).on("mouseout.shrink",w).on("mouseover.tooltip",f.show).on("mouseout.tooltip",f.hide),A.append("text").attr("class","label").attr("x",function(){return"left"==r?0:i}).attr("y",function(a){return p(a.y0)+p(d(a))/2}).attr("dy",".35em").attr("text-anchor",function(){return"left"==r?"end":"start"}).text(function(a){return u(e(a),g)});var B=z.exit();B.select("rect").transition().duration(1e3).attr("width",0).attr("x",function(){return"left"==r?0:i}).attr("fill-opacity",0).remove(),B.select("text").transition().delay(function(a,b){return 20*b}).duration(1e3).attr("x",function(){return"left"==r?0:i}),B.transition().delay(function(a,b){return 20*b}).duration(1e3).attr("fill-opacity",0).remove(),t(h),d3.select(window).on("resize.skills."+b,function(){t(h)}),$("#redraw-skills, .go-to").click(function(){t(0)})})}var b,c,d,e,f,g=22,h=1e3,i=300,j=300,k=700,l={top:80,right:0,bottom:30,left:0},m=20,n=3,o=2,p=d3.scale.linear().range([0,k]),q=12,r="left",s="";return a.containerID=function(c){return arguments.length?(b=c,a):b},a.yValue=function(b){return arguments.length?(d=b,a):d},a.nameValue=function(b){return arguments.length?(e=b,a):e},a.statusColors=function(b){return arguments.length?(c=b,a):c},a.maxCharLength=function(b){return arguments.length?(g=b,a):g},a.durationDefault=function(b){return arguments.length?(g=b,a):g},a.chartType=function(b){return arguments.length?(s=b,a):s},a.orientation=function(b){return arguments.length?(r=b,a):r},a.margin=function(b){return arguments.length?(l=b,a):l},a.tip=function(b){return arguments.length?(f=b,a):f},a}function initiateIngredientsChart(a,b){var c=splitData(a);verticalBarStackChart_listed_core=verticalBarStack().statusColors({core:"#FFB400",extra:"#2a2a2a"}).nameValue(function(a){return a.name}).yValue(function(a){return parseFloat(a.value)}).chartType("listed core").orientation("left").containerID("listed_core").tip(tip),verticalBarStackChart_listed_extra=verticalBarStack().statusColors({core:"#FFB400",extra:"#2a2a2a"}).nameValue(function(a){return a.name}).yValue(function(a){return parseFloat(a.value)}).chartType("listed extra").orientation("left").containerID("listed_extra").tip(tip),d3.select("#listed_core").datum(c.core).call(verticalBarStackChart_listed_core),d3.select("#listed_extra").datum(c.extra).call(verticalBarStackChart_listed_extra),initialIngredients=a,setInterval(function(){"generic"==lastState?(redrawIngredients(getRandomSubarray(b,b.length-2),"user_ingredients"),lastState="personalized"):(redrawIngredients(getRandomSubarray(a,a.length-5),"job_ingredients"),lastState="generic")},3e3)}function initiateUserVerticalBarStackChart(a){var b=splitData(a);verticalBarStackChart_yours_core=verticalBarStack().statusColors({core:"#FFB400",extra:"#2a2a2a"}).nameValue(function(a){return a.name}).yValue(function(a){return parseFloat(a.value)}).orientation("right").chartType("yours core").containerID("yours_core").tip(tip),verticalBarStackChart_yours_extra=verticalBarStack().statusColors({core:"#FFB400",extra:"#2a2a2a"}).nameValue(function(a){return a.name}).yValue(function(a){return parseFloat(a.value)}).orientation("right").chartType("yours extra").containerID("yours_extra").tip(tip),d3.select("#yours_core").datum(b.core).call(verticalBarStackChart_yours_core),d3.select("#yours_extra").datum(b.extra).call(verticalBarStackChart_yours_extra)}function redrawIngredients(a){if(verticalBarStackChart_yours_core&&verticalBarStackChart_yours_extra){var b=splitData(a);d3.select("#yours_core").data([b.core]).call(verticalBarStackChart_yours_core),d3.select("#yours_extra").data([b.extra]).call(verticalBarStackChart_yours_extra)}else initiateUserVerticalBarStackChart(a);var b=splitData(a);d3.select("#listed_core").data([b.core]).call(verticalBarStackChart_listed_core),d3.select("#listed_extra").data([b.extra]).call(verticalBarStackChart_listed_extra),lastPersonalizedDataArray=a}function listOfIngredientNames(a){return a.map(function(a){return a.name})}function compareArrays(a,b){return JSON.stringify(listOfIngredientNames(a))==JSON.stringify(listOfIngredientNames(b))?!0:!1}function splitData(a){var b=a.filter(function(a){return"core"==a.type}),c=a.filter(function(a){return"extra"==a.type});return{core:b,extra:c}}function getRandomSubarray(a,b){for(var c,d,e=a.slice(0),f=a.length;f--;)d=Math.floor((f+1)*Math.random()),c=e[d],e[d]=e[f],e[f]=c;return e.slice(0,b)}function skillsQueue(a,b){queue().defer(d3.json,a).defer(d3.json,b).await(processSkillsData)}function processSkillsData(a,b,c){console.log(a,b,c),b.length>0?initiateIngredientsChart(b,c):$("#no-data").show()}var verticalBarStackChart_listed_core,verticalBarStackChart_listed_extra,verticalBarStackChart_yours_core,verticalBarStackChart_yours_extra,lastPersonalizedDataArray=[],initialIngredients=[],pcFormat=d3.format(".0%"),lastState="generic",tip=d3.tip().attr("class","d3-tip").offset([-10,0]).html(function(a){var b=$("#jobtitle-span").text();return b=$.trim(b),"<span style='color:red'>"+a.value+"g</span> of "+a.name+" ."});skillsQueue("data/data_generic.json","data/data_personalized.json");