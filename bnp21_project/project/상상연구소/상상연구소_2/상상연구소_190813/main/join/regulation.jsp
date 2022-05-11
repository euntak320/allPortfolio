<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<script type="text/javascript">
	$(document).ready(function() {
	});

	function next_join() {
		if ($("input:checkbox[id='agree_member']").is(":checked")
				&& $("input:checkbox[id='agree_info']").is(":checked")) {
			$("#regulation_agree_member").val("Y");
			$("#regulation_agree_info").val("Y");

			$("#join_form").attr("action", "/join.do");
			$("#join_form").submit();
		} else {
			alert("약관에 동의해주세요.");
			return false;
		}
	};
</script>


<form id="join_form" method="POST">
	<input type="hidden" id="regulation_agree_member" name="regulation_agree_member" value="${userVO.regulation_agree_member}" /> 
	<input type="hidden" id="regulation_agree_info" name="regulation_agree_info" value="${userVO.regulation_agree_info}" />
</form>

<section>
	<div class="content_area">
		<div class="title_area">
			<span class="title">약관동의</span>
		</div>
		<div class="join_list_area">
			<span class="one">가입방법이미지</span>
		</div>
		<div class="join_content">
			<div class="role_area">
				<span class="title">회원가입약관</span>
				<div class="role_list">
					<p>
						제1조 약관의 목적과 사용 제한 <br /> 1. 이 이용 약관(이하 "약관"이라고 합니다)은 (주)이매진C&E(이하
						“회사”라고 합니다)가 운영하는 인터넷 사이트인 (주)이매진C&E에서 제공되는 서비스(이하 “서비스”라고 합니다)를
						이용함에 있어 회사와 이용자의 권리와 의무, 책임사항을 정하기 위해, ‘(주)이매진C&E 회원 가입 약관’에 기반하여
						쓰여졌습니다. <br /> 2. 사이트를 이용한다는 것은 약관에 동의한다는 것을 의미하며, 만약 약관에 동의하지 않을
						경우 사이트를 이용해서는 안 됩니다. <br /> <br /> 제2조 정의 <br /> 1.
						"(주)이매진C&E"는 컴퓨터 등 정보통신설비를 이용하여 재화 또는 서비스 또는 정보(이하 “재화 등”이라 합니다)를
						제공, 교환, 거래, 유통할 수 있도록 설정한 가상의 영업장을 말합니다. <br /> 2. "(주)이매진C&E"는
						재화 등을 판매하는 스토어를 운영하는 사업자의 의미로도 사용됩니다. <br /> 3. "이용자"라 함은 사이트에
						접속하여 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 방문자(비회원)를 의미합니다. <br /> 4.
						"회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 사이트에 회원의 계정으로 접속하여 재화 또는
						서비스, 정보를 제공받거나 교환 및 거래, 유통하는 자를 의미합니다. <br /> 5. "방문자"라 함은 회원 가입을
						하지 않고 회사가 제공하는 재화 또는 서비스, 정보를 이용하는 자를 의미합니다. <br /> 6. "컨텐츠"라 함은
						사이트에 게재된 모든 문서, 그림, 사진, 일러스트, 사용자 환경, 로고, 소리, 음악, 컴퓨터 코드, 디자인, 구조,
						코디네이션, 표현, 전반적인 느낌과 분위기 등을 의미합니다. <br /> <br /> 제3조 약관의 게시와 개정 <br />
						1. 회사는 이 약관의 내용을 이용자가 알 수 있도록 사이트의 초기화면에 하이퍼링크로 게시합니다. <br /> 2.
						회사는 약관의규제에관한법률, 전자상거래등에서의소비자보호에관한법률, 소비자기본법 등 관련 법규를 위배하지 않는 범위에서
						이 약관의 일부를 변경, 수정, 추가, 삭제할 수 있습니다. <br /> 3. 회사가 약관을 개정할 경우에는
						적용일자를 약관의 하단에 명시하고, 사이트 초기화면의 공지사항 혹은 그에 준하는 게시판에 공지합니다. <br />
						4. 약관은 해당 공지가 이루어진 즉시 발효되며, 약관에 동의하지 않는 회원은 탈퇴하여야 합니다. <br /> 5.
						회사가 약관을 개정할 경우, 개정 약관은 소급적용되지 않습니다. <br /> 6. 이용자가 가입 시 동의한 약관에
						대해 열람을 요구할 경우, 전자우편으로 해당 약관을 링크형태로 전송합니다. <br /> 7. 본 약관에 정하지 아니한
						사항과 이 약관의 해석에 관해서는 전자상거래등에서의소비자보호에관한법률 등 관련 법령 및 유권 기관의 해석 또는 통상의
						상관례에 따릅니다. <br /> <br /> 제4조 사이트의 컨텐츠 <br /> 1. 컨텐츠는 회사가 소유하고
						제어하며, 법적인 권리를 보유하고 있을 뿐만 아니라 저작권과 특허권, 상표권을 비롯한 다양한 지적 재산권법의 보호를
						받습니다. <br /> 2. 회사가 혹은 약관에서 혹은 게시물에서 별도로 예외를 허용하지 않는 한, 회사의 성문화된
						동의 없이, 사이트 혹은 컨텐츠의 일부 혹은 전부를 임의의 컴퓨터, 서버, 웹 사이트 또는 다른 매체에 상업적인
						목적으로 혹은 타 사이트, 타 회사의 이익이나 홍보를 위한 목적으로 복사, 전재, 업로드, 번역, 전송, 배포,
						미러링하거나 공연히 전시해서는 안 됩니다. <br /> 3. 이용자가 컨텐츠의 고지문구와 원래 내용을 수정하거나
						훼손하지 않고, 비상업적이고 개인적인 목적으로 사용하며, 네트워크에 연결된 컴퓨터나 서버에 보관하지 않고, 추가적인
						표시나 보증, 권한 표시를 하지 않는다는 전제 하에 사이트의 컨텐츠를 다운로드하거나 컨텐츠의 사본을 보관할 수
						있습니다. <br /> 4. 회사가 아닌, 회원이 사이트의 게시판에 게시한 저작물은 1항, 2항, 3항의 적용을 받지
						않으며, 이 저작물들에 대한 권리와 의무는 해당 저작물을 게시한 회원 혹은 해당 저작물에서 표시하고 있는 저작권자에게
						귀속됩니다. <br /> 5. 회원은 본인이 지적재산권을 소유하지 않은 저작물을 사이트에 게시하거나 이용자가 열람
						가능하게 할 경우, 해당 저작물의 저작권자 혹은 지적재산권을 보유하고 있는 자, 회사, 단체의 인용 혹은 전재 허가를
						받고 저작권자 혹은 지적재산권을 보유하고 있는 자를 명시하여야 하며, 그렇게 하지 않아 발생한 분쟁이나 손해에 대해
						회사는 책임이 없습니다. <br /> <br /> 제5조 사이트의 정체성 <br /> 1. 사이트는 최상위권
						수험생들과, 최상위권으로 도약할 수 있는 잠재력과 의지를 가지고 있는 수험생들, 그리고 해당 수험생들의 관계자를 위해
						운영되며, 사이트 내에서 이루어지는 정보와 용역의 제공, 교환, 거래, 유통이 사이트의 정체성을 유지하는 데 유의한
						지장을 가져오지 않도록 통상의 노력을 기울입니다. <br /> 2. 1항에 언급된 사이트의 개설 취지 혹은 정체성을
						위반하거나 잠재적으로 위반할 가능성이 높은 행위는 회사에 의하여 제지될 수 있으며 회사는 해당 행위의 재발을 방지하기
						위해 적절한 조치를 취할 수 있습니다. <br /> <br /> 제6조 회사의 업무와 제공하는 서비스 <br />
						1. 회사는 학습 및 입시와 관련된 재화 등을 제공하고, 사이트 내에서 재화 등이 원활하게 교환, 거래, 유통될 수
						있는 환경을 구축 및 유지합니다. <br /> 2. 회사는 회원 간 정보 공유가 사이트 내에서 원활하게 이루어질 수
						있는 환경을 구축 및 유지합니다. <br /> 3. 회사는 구매자와 판매자의 자기 결정에 의하여 상호 간에 재화 등의
						매매 거래가 이루어질 수 있도록 스토어를 구축 및 유지하고 상호 간의 계약을 중개합니다. <br /> <br />
						제7조 정보의 제공 <br /> 1. 회사는 회원이 서비스 이용 중 필요하다고 인정되는 정보를 이메일 또는 서신우편
						등의 방법으로 회원에게 제공할 수 있습니다. <br /> 2. 회사는 다양한 방법으로 측정 및 변동되는 실적 혹은
						포인트에 따라, 그리고 회사가 인정한 공식적인 절차에 따라 회원의 등급을 정하여 별도의 혜택을 부여할 수 있습니다. <br />
						3. 2항의 이 혜택은 회원의 계정이 이용정지되거나 강등되기 전까지만 유효합니다. <br /> 4. 회사는 본 약관에
						따라 회원이 유관 법규 혹은 법령을 위반하고 있음이 확인되거나, 그러할 가능성이 현저히 높다고 판단되는 경우 회원의
						계정 이용을 정지시키고 유관 기관에 해당 회원을 고소 혹은 고발할 수 있고, 이 과정에서 사이트 하단 링크에 제공되는
						개인정보취급방침이 허용하는 범위 내에서 해당 회원의 개인 정보를 사용할 수 있습니다. <br /> 5. 회사는 회사가
						직접 운영하는 사이트 외에 다른 경로 혹은 도메인으로 접속한 이용자의 사이트 및 재화 등의 이용에 대해 신뢰성을
						보장하지 않습니다. <br /> <br /> 제8조 회사의 의무와 권리 <br /> 1. 회사는 개인정보취급방침에
						따라 회원의 개인 정보를 보호하고, 개인정보취급방침을 모든 이용자가 볼 수 있도록 사이트 초기화면 하단에 링크로
						게시합니다. <br /> 2. 회사는 이용자가 안전하게 서비스를 이용할 수 있도록 일정한 수준의 보안 및 암호화
						시스템을 갖춥니다. <br /> 3. 회사는 이용자의 약관 제9조, 제10조를 위반한 회원에게 poison
						point를 주고, 일정 수준 이상의 poison point가 누적될 경우 해당 회원을 사이트 이용이 제한되는 등급으로
						강등시키거나 해당 회원의 사이트에 대한 접근을 기술적으로 차단할 수 있습니다. <br /> 4. 회사는 유관 법령과
						본 약관이 금지하거나 본 약관에 기재되어 있지 않더라도 통상의 상관례, 미풍양속에 반하는 행위를 하지 않으며, 이
						약관이 정하는 바에 따라 지속적이고 안정적으로 서비스를 제공하기 위해 통상의 노력을 기울입니다. <br /> <br />
						제9조 이용자의 의무와 권리 <br /> 1. 회원은 사이트 내의 다수의 게시판에 글을 쓸 수 있는 권리가 있습니다.
						<br /> 2. 회원은 언제든지 자동화된 절차를 통해서 사이트를 탈퇴할 수 있는 권리가 있습니다. <br />
						3. 회원이 제8조 3항에 의해 강등된 경우, 본조 2항의 권리는 기술적으로 제한될 수 있습니다. <br /> 4.
						이용자는 가입 절차에 따라 기재되는 모든 정보를 사실 그대로 기재하여야 합니다. <br /> 5. 회원은 유관 법령에
						따라 회원의 개인정보에 대한 관리 책임을 가집니다. <br /> 6. 회원은 자신의 계정이 도난당하거나 제3자가
						사용하고 있음을 인지한 경우 바로 회사에 알리고 회사의 안내에 따라야 합니다. <br /> 7. 회원은 사이트 내
						게시판에 글 혹은 댓글을 게시할 때, (주)이매진C&E게시판및회원관리법과 게시판의 공지사항에 명시된 모든 지침과 제한
						사항을 충실히 이행하여야 합니다. <br /> 8. 이용자는 약관의 수정되었는지 정기적으로 확인할 의무가 있으며,
						약관의 변경 후에도 사이트를 계속 이용한다는 것은 변경된 약관에 동의함을 의미합니다. <br /> <br />
						제10조 금지 행위 <br /> 1. 회원은 타 회원에게 쪽지나 이메일, 혹은 개인의 의사를 표현할 수 있는 기타
						경로를 통하여 광고, 간접 광고, 욕설, 반말, 수신자에게 불쾌감을 유발할 수 있는 가능성이 객관적으로 매우 높은
						비꼼이나 풍자, 위협을 하여서는 안 됩니다. <br /> 2. 회원은 어떠한 경우에도 게시판 상의 글 또는 댓글,
						혹은 개인의 의사를 표현할 수 있는 기타 경로를 통하여 타 회원 혹은 타 집단•단체에 관한 광고, 간접 광고, 욕설,
						반말, 수신자에게 불쾌감을 유발할 수 있는 가능성이 객관적으로 매우 높은 비꼼이나 풍자, 위협, 논리적인 근거가 결여된
						비방이 담긴 내용을 공연히 게시하여서는 안 됩니다. <br /> 3. 사이트 내의 특정 개인•집단•단체를 명시적으로
						지칭하지 않은 경우에도, 해당 개인•집단•단체를 일부 회원이 충분히 인식할 수 있는 수준으로 암시하였으면 이는 2항의
						금지 행위에 준하는 것으로 해석합니다. <br /> 4. 회원은 인위적으로 회사의 혹은 회사에 연결된 사이트, 서버,
						네트워크의 부하를 가중시키거나 이들을 공격함으로써 사이트가 정상적으로 운영되지 못하게 하거나, 다른 이용자가 사이트를
						정상적으로 이용할 수 없게 해서는 안 됩니다. <br /> 5. 열람, 유출, 변경이 허용되지 않은 정보를 획득 및
						제3자에게 전달 혹은 전시, 변경하거나, 사이트 내의 기술적인 문제점이나 취약점을 악용하는 등의 방식으로 사이트의
						건전한 운영을 방해해서는 안 됩니다. <br /> 6. 회원은 회사나 제3자의 지적재산권을 침해해서는 안 됩니다. <br />
						7. 이용자는 사이트의 컨텐츠를 딥링크, 페이지 스크레이프, 로봇, 스파이더 혹은 임의의 자동화 도구, 프로그램,
						알고리즘 혹은 이와 동등한 수작업을 통해 복사하거나 감시하여서는 안 되며, 회사가 공식적으로 제공하는 구조 및 경로를
						우회하여 확보하려 해서는 안 됩니다. <br /> 8. 회원은 자신의 계정을 제3자가 이용하게 해서는 안 됩니다. <br />
						9. 회원은 타인, 특정 단체, 조직, 기관, 회사를 사칭하거나 허가 없이 대표하여서는 안 됩니다. <br /> <br />
						제11조 서비스의 이용 시간과 중단 <br /> 1. 회사는 서비스를 일정 범주로 구분하여 임의의 범주별 혹은 범주의
						조합별 이용 가능 시간을 별도로 정할 수 있으며, 이 경우 이용자에게 관련 내용을 공지합니다. <br /> 2.
						회사는 컴퓨터, 서버 등 정보통신설비 그리고 네트워크의 보수, 점검, 교체, 고장, 두절 등의 사유가 발생한 경우
						그리고 법적 절차로 인한 경우 서비스의 제공을 사전 공지 후 일시적으로 중단할 수 있으며, 천재지변 등 불가항력적
						사유가 발생한 경우 서비스의 제공을 사전 통보 없이 일시적으로 중단할 수 있습니다. <br /> 3. 회사는 2항의
						사유로 서비스의 제공이 일시적으로 중단됨으로 인해 이용자 혹은 제3자가 입은 손해에 대하여 회사의 고의 또는 과실이
						입증되지 않는 한 배상하지 않습니다. <br /> <br /> 제12조 회원에 대한 통지 <br /> 1. 회사는
						회원이 회사에 제출한 이메일 주소로 회원에게 통지할 수 있습니다. <br /> 2. 긴급한 사안이라고 판단되는 경우,
						회사는 회원이 회사에 제출한 유선 혹은 무선 연락처로 회원에게 연락할 수 있습니다. <br /> 3. 회사는 불특정
						다수의 회원 혹은 이용자에 대한 통지의 경우 사이트의 초기화면에서 접근할 수 있는 게시판에 해당 내용을 게시함으로써
						개별 통지에 갈음할 수 있으며, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대해서는 개별 통지할 수
						있습니다. <br /> <br /> 제13조 추가 약관과 약관의 우선 순위 <br /> 1. 사이트의 특정
						부분이나 기능에 있어서, 추가적인 약관(이하 “부속약관”이라 합니다)이 적용될 수 있습니다. <br /> 2.
						부속약관이 적용되는 사이트의 특정 부분이나 기능을 이용한다는 것은, 이용자가 해당 부속약관에 동의함을 의미하며, 그렇지
						않을 경우 해당 부분이나 기능을 이용하여서는 안 됩니다. <br /> 3. 본 약관과 부속약관 사이에 충돌이 있을
						경우, 특정 언급이 없는 한, 본 약관이 부속약관에 우선합니다. <br /> <br /> 제14조 부인 <br />
						1. 회사는 컨텐츠의 무결성이나 사이트의 서비스가 장애 없이 제공됨을 보증하지 않으며, 컨텐츠나 서비스에 대해 문제가
						발생할 경우 그 문제가 해결될 것임을 보증하지 않습니다. <br /> 2. 회사는 이용자가 사이트를 사용함으로 인해
						특정한 결과가 초래될 것임을 보증하지 않습니다. <br /> 3. 사이트의 컨텐츠와 구성 요소는 사전 통보 없이
						변경될 수 있습니다. <br /> 4. 회사는 이용자가 사이트에서 다운로드하는 파일이나 데이터가 바이러스에 감염되거나
						파괴적인 속성을 지니지 않았음을 보증하지 않습니다. <br /> <br /> 제15조 책임의 한계 <br />
						1. 회사에 명백한 귀책사유가 있는 경우를 제외하고, 회사는 이용자가 사이트를 이용함으로써 발생한 어떤 간접적이거나
						우발적인 손상 혹은 손해에 대해서도 책임이 없습니다. <br /> <br /> 제16조 책임의 면제 <br />
						1. 이용자가 의도적으로 사이트가 제공하는 서비스가 정상적으로 작동되지 못하게 하거나, 사이트에서 제공하는 컨텐츠 혹은
						저작물을 불법적으로 이용, 배포 혹은 변형함으로써 제3사에 손해를 입혔을 때, 제3사가 회사를 상대로 제기하는 요구,
						의무, 청구, 비용에 대한 책임은 이용자가 집니다. <br /> 2. 사이트나 서비스와 연계되어 있는 제3사의 행위,
						태만, 약관에 대해서는 제3사가 책임을 집니다. <br /> 3. 회사와 사이트는 대한민국 서울에 위치하고 있으며,
						비록 대한민국을 제외한 지역에서 사이트에 접속할 수 있을지라도, 모든 서비스가 대한민국을 제외한 지역에서 이용 가능한
						것은 아니며, 회사는 서비스의 이용을 대한민국 내로 제한할 권리가 있고, 만약 사이트의 이용이 허가되지 않은 지역에서
						사이트를 이용함으로써 해당 지역의 법률에 따른 문제가 발생할 경우 회사는 그에 대한 책임을 지지 않습니다. <br />
						<br /> 제17조 약관의 위반 <br /> 1. 회사는 이용자가 사이트를 이용함과 관련하여 사법 절차가 진행
						중이거나 진행될 예정인 경우 이용자의 신원을 포함한 이용자 정보를 공개할 수 있습니다. <br /> 2. 회사는
						임의의 이용자 혹은 누군가가 의도적이건 비의도적이건 간에, 회사 혹은 타 이용자의 권리와 재산을 침해할 때 이용자의
						신원을 검증하고, 접촉을 시도할 수 있습니다. <br /> 3. 회사는 관련 법규, 조항, 사법 절차 또는 정부
						기관의 요구에 따라 필요하다고 생각될 때 어떤 정보라도 공개할 권리를 가지고 있습니다. <br /> 4. 회사는
						제3사 또는 조직과 정보를 교환해야 할 때, 관련 법규에 의해 요구되거나 허용될 경우, 이용자의 정보를 공개할 수
						있습니다. <br /> 5. 회사는 이용자가 약관을 위반하였을 때, 이용자가 인지할 수 있는 방법으로 경고를 취하고,
						경고에도 불구하고 이용자의 위반 행위가 지속될 경우 이용자의 사이트 접속을 종료시키거나, 사이트로의 접근을 차단할 수
						있습니다. 단, 게시판 도배, 서비스 거부 혹은 해킹 공격, 반달리즘 등 사이트의 보호를 위해 신속한 조치가 반드시
						요구되는 상황일 경우, 사전 공지 없이 이용자의 사이트 접속을 종료시키거나, 사이트로의 접근을 차단할 수 있습니다. <br />
						<br /> 제18조 일부 무효 <br /> 1. 본 약관의 일부 조항이 무효일지라도 다른 조항들은 유효하며,
						무효인 조항은 해당 조항의 의도를 최대한 고려하여 국내법에 저촉되지 않게 해석합니다. <br /> <br />
						제19조 관할 법원 <br /> 1. 이용자가 사이트 혹은 서비스를 이용함으로써 회사와 분쟁이 발생할 경우, 이용자와
						회사는 쌍방 합의 하에 문제를 해결하되, 합의가 이루어지지 않을 경우 회사의 영업 소재지를 관할하는 법원을
						합의관할법원으로 합니다.
					</p>
				</div>
				<div class="check_list">
					<div class="check fr">
						<input type="checkbox" name="" value="" title="체크박스" id="agree_member"> 
						<label for="agree_member" class="check_pos">위 <b>회원가입약관</b>에 동의합니다.	</label>
					</div>
				</div>
			</div>
			<div class="role_area mt60">
				<span class="title">개인정보취급방침</span>
				<div class="role_list">
					<p>
						<(주)이매진C&E>('http://www.imaginecne.com'이하 '상상국어평가연구소')은(는)
						개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수
						있도록 다음과 같은 처리방침을 두고 있습니다. <br /> <(주)이매진C&E>('상상국어평가연구소') 은(는)
						회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다. <br /> ○
						본 방침은부터 2014년 1월 1일부터 시행됩니다. <br /> <br /> 1. 개인정보의 처리 목적
						<(주)이매진C&E>('http://www.imaginecne.com'이하 '상상국어평가연구소')은(는) 개인정보를
						다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는
						사전동의를 구할 예정입니다. <br /> 가. 홈페이지 회원가입 및 관리 <br /> 회원 가입의사 확인, 회원제
						서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리 등을 목적으로 개인정보를 처리합니다. <br /> <br />
						나. 재화 또는 서비스 제공 <br /> 물품배송, 서비스 제공, 콘텐츠 제공 등을 목적으로 개인정보를 처리합니다.
						<br /> <br /> 2. 개인정보 파일 현황 <br /> <br /> 1. 개인정보 파일명 : cne <br />
						- 개인정보 항목 : 자택주소, 비밀번호 질문과 답, 비밀번호, 로그인ID, 휴대전화번호, 이름, 이메일, 결제기록,
						접속 IP 정보, 쿠키, 접속 로그 <br /> - 수집방법 : 홈페이지 <br /> - 보유근거 : 홈페이지
						내에서의 회원들을 위한 원활한 컨텐츠 제공을 위하여 <br /> - 보유기간 : 지체없이 파기 <br /> -
						관련법령 : 대금결제 및 재화 등의 공급에 관한 기록 : 5년 <br /> <br /> 3. 개인정보의 처리 및
						보유 기간 <br /> ① <(주)이매진C&E>('상상국어평가연구소')은(는) 법령에 따른 개인정보 보유·이용기간
						또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다. <br />
						② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. <br /> <br /> 4. 정보주체의 권리,의무 및
						그 행사방법 이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다. <br /> ① 정보주체는
						(주)이매진C&E(‘http://www.imaginecne.com’이하 ‘상상국어평가연구소) 에 대해 언제든지 다음 각
						호의 개인정보 보호 관련 권리를 행사할 수 있습니다. <br /> 1. 개인정보 열람요구 <br /> 2. 오류
						등이 있을 경우 정정 요구 <br /> 3. 삭제요구 <br /> 4. 처리정지 요구 <br /> ② 제1항에
						따른 권리 행사는(주)이매진C&E(‘http://www.imaginecne.com’이하 ‘상상국어평가연구소) 에 대해
						개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며
						<기관 /회사명>(‘사이트URL’이하 ‘사이트명) 은(는) 이에 대해 지체 없이 조치하겠습니다. <br />
						③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 <기관 /회사명>(‘사이트URL’이하
						‘사이트명) 은(는) 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다. <br />
						④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우
						개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다. <br />
						<br />
						5. 처리하는 개인정보의 항목 작성 <br />
						① <(주)이매진C&E>('http://www.imaginecne.com'이하 '상상국어평가연구소')은(는) 다음의
						개인정보 항목을 처리하고 있습니다. <br />
						1<홈페이지 회원가입 및 관리> <br />
						- 필수항목 : 자택주소, 비밀번호 질문과 답, 비밀번호, 자택전화번호, 로그인ID, 휴대전화번호, 이름, 이메일,
						결제기록, 접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그 <br />
						- 선택항목 : <br />
						<br />
						6. 개인정보의 파기<(주)이매진C&E>('상상국어평가연구소')은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는
						지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다. <br />
						-파기절차 <br />
						이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에
						따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른
						목적으로 이용되지 않습니다. <br />
						-파기기한 <br />
						이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적
						달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로
						인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다. <br />
						-파기방법 <br />
						전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. <br />
						<br />
						7. 개인정보의 안전성 확보 조치 <(주)이매진C&E>('상상국어평가연구소')은(는) 개인정보보호법 제29조에 따라
						다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다. <br />
						1. 개인정보의 암호화 <br />
						이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및
						전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다. <br />
						2. 개인정보에 대한 접근 제한 <br />
						개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여
						필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다. <br />
						8. 개인정보 보호책임자 작성 <br />
						① (주)이매진C&E(‘http://www.imaginecne.com’이하 ‘상상국어평가연구소) 은(는) 개인정보
						처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이
						개인정보 보호책임자를 지정하고 있습니다. <br />
						▶ 개인정보 보호책임자 <br />
						성명 :한상현 <br />
						직책 : <br />
						직급 : <br />
						연락처 :02-578-3881, imaginecne@naver.com, 02-574-3881 <br />
						※ 개인정보 보호 담당부서로 연결됩니다. <br />
						▶ 개인정보 보호 담당부서 <br />
						부서명 : <br />
						담당자 : <br />
						연락처 : <br />
						② 정보주체께서는 (주)이매진C&E(‘http://www.imaginecne.com’이하 ‘상상국어평가연구소) 의
						서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
						보호책임자 및 담당부서로 문의하실 수 있습니다. (주)이매진C&E(‘http://www.imaginecne.com’이하
						‘상상국어평가연구소) 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다. <br />
						<br />
						11. 개인정보 처리방침 변경 <br />
						①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
						변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다. 
					</p>
				</div>
				<div class="check_list">
					<div class="check fr">
						<input type="checkbox" name="" value="" title="체크박스" id="agree_info"> 
						<label for="agree_info" class="check_pos">위 <b>개인정보취급방침</b>에 동의합니다.</label>
					</div>
				</div>
			</div>
		</div>

		<div class="list_btn" onclick="next_join();">
			<span class="btn circle fr">확인</span>
		</div>

	</div>
</section>