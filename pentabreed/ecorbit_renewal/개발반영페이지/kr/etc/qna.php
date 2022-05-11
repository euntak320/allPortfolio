<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "KR_ETC_11";
?>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- META [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/meta.php"; ?>
	<!-- META [E] -->

	<title>에코비트 | Q&A</title>

	<!-- SCRIPT_ETC [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/script_etc.php"; ?>
	<!-- SCRIPT_ETC [E] -->
</head>

<body>
    <div id="wrap">
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- content [S] -->
        <main class="util_area w1360">
            <div class="keyvisual_area">
            </div>
            <div class="qna_area">
                <span class="main_title en_mont">Q&amp;A</span>
                <div class="question_list">
                    <div class="question_box">
                        <span class="question_title">분야</span>
                        <div class="select area">
                            <select name="" id="">
                                <option value="">문의하실 곳을 선택해주세요.</option>
                                <option value="">사업협력</option>
                                <option value="">인재채용</option>
                                <option value="">컴플라이언스</option>
                                <option value="">에코비트 (토양사업)</option>
                                <option value="">에코비트 워터</option>
                                <option value="">에코비트 M&S</option>
                                <option value="">에코비트 그린</option>
                                <option value="">에코비트 그린 청주</option>
                                <option value="">에코비트 그린 충주</option>
                                <option value="">에코비트 에너지</option>
                                <option value="">에코비트 에너지 세종</option>
                                <option value="">에코비트 에너지 정세</option>
                                <option value="">에코비트 에너지 청원</option>
                                <option value="">에코비트 에너지 명성</option>
                                <option value="">에코비트 에너지 전주</option>
                                <option value="">에코비트 에너지 울산</option>
                                <option value="">에코비트 로지스</option>
                                <option value="">에코비트 엔솔</option>
                                <option value="">에코비트 엔지니어링</option>
                                <option value="">에코비트 프리텍</option>
                            </select>
                        </div>
                    </div>
                    <div class="question_box">
                        <span class="question_title">이름</span>
                        <div class="input area">
                            <input type="text" title="성함을 입력해주세요" placeholder="성함을 입력해주세요.">
                        </div>
                    </div>
                    <div class="question_box">
                        <span class="question_title">이메일</span>
                        <div class="email area">
                            <div class="input_area">
                                <input type="text" title="이메일을 입력해주세요" placeholder="이메일을 입력해주세요">
                            </div>
                            <span>@</span>
                            <div class="select_area">
                            <select name="" id="">
                                    <option value="">naver.com</option>
                                    <option value="">daum.net</option>
                                    <option value="">gmail.com</option>
                                    <option value="">kakao.com</option>
                                    <option value="">직접입력</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="question_box">
                        <span class="question_title">연락처</span>
                        <div class="tel area">
                            <div class="select_area">
                            <select name="" id="">
                                    <option value="" selected>010</option>
                                    <option value="">직접입력</option>
                                </select>
                            </div>
                            <span>-</span>
                            <div class="input_area">
                                <input type="text" maxlength="4" placeholder="1234">
                            </div>
                            <span>-</span>
                            <div class="input_area">
                                <input type="text" maxlength="4" placeholder="5678" >
                            </div>
                        </div>
                    </div>
                    <div class="question_box">
                        <span class="question_title">내용</span>
                        <div class="text area">
                            <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력해주세요"></textarea>
                        </div>
                    </div>
                </div>
                <div class="question_explain_area">
                    <span class="title">개인정보 수집 및 이용동의</span>
                    <p class="paragraphy">Q&A 게시판 이용을 위하여 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에 따라 개인정보 수집·이용에 대한 내용을 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다. 입력하신 개인정보는 아래의 목적으로 제공되며, 이외의 용도로는 활용되지 않습니다.</p>
                    <div class="qna_table_area">
                        <span>개인정보 수집 및 이용 내역</span>
                        <table>
                            <colgroup>
                                <col style="width:33.33%">
                                <col style="width:33.33%">
                                <col style="width:33.33%">
                            </colgroup>
                            <thead>
                                <th scope="col">항목</th>
                                <th scope="col">목적</th>
                                <th scope="col">보유기간</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>성명, 연락처, 이메일</td>
                                    <td>고객문의를 위한 본인 확인 및 답변</td>
                                    <td>1년 이내 폐기</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="etc_area">
                        <p>*위의 개인정보 수집/이용에 동의를 거부할 권리가 있습니다. 개인정보 수집/이용에 미동의 시 Q&A 게시판을 이용하실 수 없습니다.</p>
                        <div class="check_area">
                            <input type="checkbox" id="agree">
                            <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                    </div>
                    <div class="com_btn_area">
                        <button type="button" class="btn">문의하기</button>
                    </div>
                </div>
            </div>
        </main>
        <!-- content [E] -->

		<!-- FOOTER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E] -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_KO_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>
</body>
</html>