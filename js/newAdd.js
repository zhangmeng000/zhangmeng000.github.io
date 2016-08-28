$(function(){
// 设置新增地址点击弹出
$('#newaddr').hide(); //设置隐藏
$('#dialog').hide(); //设置隐藏
$('#opener').click(function(){
	$('#newaddr').show();
	$('#dialog').show();
});

$('#newaddr').width($(window).width());
$('#newaddr').height($(window).height());



$('.boxxin a').click(function(){
	$('#newaddr').hide();
	$('#dialog').hide();
})

 var shou=/\w{2,6}/;
 var shouhuo="";
 $('#shouhuoname').blur(function(){
 	shouhuo=$('#shouhuoname').val();
 	if(shouhuo==""){
 		$('#shouhuo').text('请填写收货人!')
 	}else{
 		$('#shouhuo').text('')
 	}
 })
 var dian=/^1\d{10}/;
 var dianhua="";
 $('#phone').blur(function(){
 	dianhua=$('#phone').val();
 	if(dian.test(dianhua)==true){
 		$('#dianhua').text('')
 	}else{
 		$('#dianhua').text('填写的手机格式错误!')
 	}
 })





















})