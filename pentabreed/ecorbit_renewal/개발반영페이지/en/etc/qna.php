<?
	include_once $_SERVER["DOCUMENT_ROOT"] ."/lib/func_user.php";

	$PAGECODE = "EN_ETC_11";
?>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- META [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/meta.php"; ?>
	<!-- META [E] -->

	<title>ECOCORBIT | Q&A</title>

	<!-- SCRIPT_ETC [S] -->
	<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/script_etc.php"; ?>
	<!-- SCRIPT_ETC [E] -->
</head>

<body>
    <div id="wrap">
		<!-- HEADER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/header.php"; ?>
		<!-- HEADER [E] -->

		<!-- GNB [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/gnb.php"; ?>
		<!-- GNB [E] -->

        <!-- CONTENT [S] -->
        <main class="util_area w1360">
            <div class="keyvisual_area">
            </div>
            <div class="qna_area">
                <span class="main_title en_mont">Q&amp;A</span>
                <div class="question_list">
                    <div class="question_box">
                        <span class="question_title">Department</span>
                        <div class="select area">
                            <select name="" id="">
                                <option value="">Please select a place to inquire.</option>
                                <option value="">Business communication</option>
                                <option value="">Job opportunity</option>
                                <option value="">Compliance</option>
                                <option value="">ECORBIT (Soil Treatment)</option>
                                <option value="">ECORBIT WATER</option>
                                <option value="">ECORBIT M&S</option>
                                <option value="">ECORBIT GREEN</option>
                                <option value="">ECORBIT GREEN Cheongju</option>
                                <option value="">ECORBIT GREEN Chungju</option>
                                <option value="">ECORBIT ENERGY</option>
                                <option value="">ECORBIT ENERGY Sejong</option>
                                <option value="">ECORBIT ENERGY Jeongse</option>
                                <option value="">ECORBIT ENERGY Cheongwon</option>
                                <option value="">ECORBIT ENERGY Myungsung</option>
                                <option value="">ECORBIT ENERGY Jeonju</option>
                                <option value="">ECORBIT ENERGY Ulsan</option>
                                <option value="">ECORBIT LOGIS</option>
                                <option value="">ECORBIT ENSOL</option>
                                <option value="">ECORBIT ENGINEERING</option>
                                <option value="">ECORBIT PRETECH</option>
                            </select>
                        </div>
                    </div>
                    <div class="question_box">
                        <span class="question_title">Name</span>
                        <div class="input area">
                            <input type="text" title="Please enter your name." placeholder="Please enter your name.">
                        </div>
                    </div>
                    <div class="question_box">
                        <span class="question_title">E-mail</span>
                        <div class="email area">
                            <div class="input_area">
                                <input type="text" title="Please enter your e-mail." placeholder="Please enter your e-mail.">
                            </div>
                            <span>@</span>
                            <div class="select_area">
                                <select name="" id="">
                                    <option value="">naver.com</option>
                                    <option value="">daum.net</option>
                                    <option value="">gmail.com</option>
                                    <option value="">kakao.com</option>
                                    <option value="">Enter directly</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="question_box">
                        <span class="question_title">Phone Number</span>
                        <div class="tel area">
                            <div class="select_area">
                                <select name="" id="">
                                    <option value="">010</option>
                                    <option value="">Enter directly</option>
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
                        <span class="question_title">Question</span>
                        <div class="text area">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Please enter your question."></textarea>
                        </div>
                    </div>
                </div>
                <div class="question_explain_area">
                    <span class="title">Consent to Collection and Use of Personal Information </span>
                    <p class="paragraphy">In order to use the Q&A bulletin board, please read the <br class="mobile">contents on collection and use of personal information in <br class="mobile">accordance with
                        the ‘Act on the Promotion of Information <br class="mobile">and Communication Network Use and Information <br class="mobile">Protection’, and then decide whether to agree. <br class="mobile">
                        The personal information you enter is provided for the <br class="mobile">following purposes, and will not be used for any other <br class="mobile">purpose.</p>
                    <div class="qna_table_area">
                        <span>Personal Information Collection / Use History </span>
                        <table>
                            <colgroup>
                                <col style="width:33.33%">
                                <col style="width:33.33%">
                                <col style="width:33.33%">
                            </colgroup>
                            <thead>
                                <th scope="col">Item</th>
                                <th scope="col">Purpose</th>
                                <th scope="col">Retention Period</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name, Contact, eMail</td>
                                    <td>Identity verification <br class="mobile">and response for customer inquiries</td>
                                    <td>Discard within<br class="mobile">1 year</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="etc_area">
                        <p>*You have the right to refuse to consent to the collection /<br class="mobile"> use of the above personal information.</p>
                        <div class="check_area">
                            <input type="checkbox" id="agree">
                            <label for="agree">I accept the Terms and Conditions.</label>
                        </div>
                    </div>
                    <div class="com_btn_area">
                        <button type="button" class="btn">SEND</button>
                    </div>
                </div>
            </div>
        </main>
        <!-- CONTENT [E] -->

		<!-- FOOTER [S]  -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/footer.php"; ?>
		<!-- FOOTER [E]  -->

		<!-- FLOATING BANNER [S] -->
		<?	include_once $_SERVER["DOCUMENT_ROOT"] . $G_EN_FOLDER ."/inc/floating_banner.php"; ?>
		<!-- FLOATING BANNER [E] -->
    </div>
</body>
</html>