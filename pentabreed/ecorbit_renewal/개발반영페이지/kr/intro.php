<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_MAIN";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- 파비콘 -->
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <title>에코비트</title>

    <!-- css -->
    <link rel="stylesheet" href="/assets/css/lib/fonts.css">
    <link rel="stylesheet" href="/assets/css/lib/common.css">
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/lib/jquery.fullpage.min.css">
    
    <!-- js -->
    <script src="/assets/js/lib/jquery-3.6.0.min.js"></script>
    <script src="/assets/js/lib/fullpage.waterEffect.min.js"></script>
    <script src="/assets/js/lib/fullpage.extensions.min.js"></script>
    
</head>
<body>
    <div class="intro_not_scroll"></div>
    <div id="wrap">
        <!-- INTRO [S] -->
        <div class="intro_area on">
            <section class="section">
                <div class="slide intro_con01">
                    <div class="txt_box"><p><span>더 좋은 환경</span></p></div>
                </div>
                <div class="slide intro_con02">
                    <div class="txt_box"><p><span>더 좋은 자연</span></p></div>
                </div>
                <div class="slide intro_con03">
                    <div class="txt_box"><p><span>더 좋은 미래</span></p></div>
                </div>
                <div class="slide intro_con04">
                    <div class="txt_box"><p><span>믿을 수 있는 환경기업 에코비트</span></p></div>
                </div>
                <div class="slide intro_con05">
                    <div class="txt_box"><p><span class="en_mont">Wholesome Solution</span></p><p><span class="en_mont">For Our Earth</span></p></div>
                </div>
            </section>
        </div>
        <!-- INTRO [E] -->
    </div>


    <script>
        $(function () {
			setInterval(function(){
				$('body').find('> div > a').parent().remove();
			},1);


            //인트로
            var mainFull = new fullpage('.intro_area',{
                licenseKey : 'B07DB1B7-FEED4A68-A93B908F-5EE34BAA',
                
                waterEffect: true,
                waterEffectKey: '5C6EE0A4-B44B486F-94CC4EC5-8F5F59D1',
                waterEffectOptions: {
                    animateContent: true,
                    animateOnMouseMove: true
                },
                controlArrows: false,
            });
			
			var time = 1;
            setInterval(function(){
                fullpage_api.moveTo(1,time);
                time++;
            },4500);
        });
    </script>

</body>
</html>