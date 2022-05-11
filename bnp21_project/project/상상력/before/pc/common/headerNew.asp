	<div class="header">
		<h1><a href="/pc/main1.asp"><img src="images/img_logo.png?1" alt="" /></a></h1>
		<ul class="navigation">
			<li class="depth1<% If wa="intro" then%> selected<%End if%>">
				<a href="/pc/introduce1.asp"<% If wa="intro" then%> class="selected"<%End if%>>소개</a>
			</li>
			<li class="depth1<% If Left(wa,2)="m1" then%> selected<%End if%>">
				<a href="javascript:;"<% If Left(wa,2)="m1" then%> class="selected"<%End if%>>사전프로그램</a>
				<ul>
					<li class="depth2<% If wa="m1_kids" then%> selected<%End if%>">
						<a href="/pc/kids.asp"<% If wa="m1_kids" then%> class="selected"<%End if%>>키즈워크숍</a>
					</li>
					<li class="depth2<% If Left(wa,4)="m1_2" then%> selected<%End if%>">
							<a href="/pc/asia_1.asp"<% If wa="m1_2" then%> class="selected"<%End if%>>아시아메이커스워크숍 &lt;HACKMAKE&gt;</a>
					</li>
				</ul>
			</li>
			<li class="depth1<% If Left(wa,2)="m2" then%> selected<%End if%>">
				<a href="javascript:;"<% If Left(wa,2)="m2" then%> class="selected"<%End if%>>프로그램</a>
				<ul>
					<li class="depth2<% If wa="m2_talk" then%> selected<%End if%>">
						<a href="/pc/talk.asp"<% If wa="m2_talk" then%> class="selected"<%End if%>>토크콘서트</a>
					</li>
					<li class="depth2<% If wa="m2_s_talk" then%> selected<%End if%>">
						<a href="/pc/s_talk.asp"<% If wa="m2_s_talk" then%> class="selected"<%End if%>>특별강연</a>
					</li>
					<li class="depth2<% If Left(wa,4)="m2_2" then%> selected<%End if%>">
						<a href="javascript:;"<% If Left(wa,4)="m2_2" then%> class="selected"<%End if%>>워크숍 1 청년 메이커스 워크숍</a>
						<div>
							<a href="/pc/w2_1.asp"<% If wa="m2_21" then%> class="selected"<%End if%>>아두이노로 만드는 동물로봇</a><br />
							<a href="/pc/w2_2.asp"<% If wa="m2_22" then%> class="selected"<%End if%>>전자 얼굴 만들기</a><br />
							<a href="/pc/w2_3.asp"<% If wa="m2_23" then%> class="selected"<%End if%>>DIY 정원키트 만들기</a><br />
							<a href="/pc/w2_4.asp"<% If wa="m2_24" then%> class="selected"<%End if%>>미세먼지 DIY 측정기</a><br />
						</div>
					</li>
					<li class="depth2<% If Left(wa,4)="m2_3" then%> selected<%End if%>">
						<a href="javascript:;"<% If Left(wa,4)="m2_3" then%> class="selected"<%End if%>>워크숍 2 일상의 기술</a>
						<div>
							<a href="/pc/w1_1.asp"<% If wa="m2_31" then%> class="selected"<%End if%>>서울콜렉션</a><br />
							<a href="/pc/w1_2.asp"<% If wa="m2_32" then%> class="selected"<%End if%>>낭비 없는 삶-제로웨이스트 패션</a><br />
							<a href="/pc/w1_3.asp"<% If wa="m2_33" then%> class="selected"<%End if%>>모스코드워치</a><br />
							<a href="/pc/w1_4.asp"<% If wa="m2_34" then%> class="selected"<%End if%>>KIDS HACKMAKE</a><br />
							<a href="/pc/w1_5.asp"<% If wa="m2_35" then%> class="selected"<%End if%>>싸이클핵 서울</a><br />
							<a href="/pc/w1_6.asp"<% If wa="m2_36" then%> class="selected"<%End if%>>WEATHER MOOD LAMP</a><br />
						</div>
					</li>
					<li class="depth2<% If Left(wa,4)="m2_4" then%> selected<%End if%>">
							<a href="/pc/m_lab.asp"<% If wa="m2_41" then%> class="selected"<%End if%>>무료상설 워크숍 &lt;미니랩&gt;</a>
					</li>
					<li class="depth2<% If Left(wa,4)="m2_5" then%> selected<%End if%>">
							<a href="/pc/t_lab.asp"<% If wa="m2_51" then%> class="selected"<%End if%>>전시쇼케이스 &lt;T_LAB&gt;</a>
					</li>
					<li class="depth2<% If Left(wa,4)="m2_6" then%> selected<%End if%>">
							<a href="/pc/s_pro.asp"<% If wa="m2_61" then%> class="selected"<%End if%>>부대 프로그램 &lt;상상다락방&gt;</a>
					</li>
				</ul>
			</li>
			<li class="depth1<% If wa="time" then%> selected<%End if%>"><a href="/pc/time.asp"<% If wa="time" then%> class="selected"<%End if%>>프로그램 전체보기</a></li>
			<li class="depth1<% If wa="w_pp" then%> selected<%End if%>"><a href="/pc/w_pp.asp"<% If wa="w_pp" then%> class="selected"<%End if%>>함께하는 사람들</a></li>
			<li class="depth1<% If wa="way" then%> selected<%End if%>"><a href="/pc/way.asp"<% If wa="way" then%> class="selected"<%End if%>>오시는 길</a></li>
		</ul>
	  <a href="/pc/reg.asp"  class="regist">사전접수</a>
		<p class="movie">
			<a href="javascript:moviepop('show', 'https://www.youtube.com/embed/sSXIK7wYlro?autoplay=1&amp;autohide=1&amp;showinfo=0&amp;fs=0&amp;rel=0&amp;wmode=transparent');">
			<img src="images/btn_movie.png?1" alt="" width="350" height="214" /><img src="images/btn_movie_hover.png?1" alt="" /></a>
		</p>
	</div>
	<div class="right">  
		<nav class="right_top">
			<ul>
				<li><a href="http://seoulpowerstation2015.org" target="_blank">2015년 웹사이트</a></li>
				<li><a href="http://seoulpowerstation2016.org" target="_blank">2016년 웹사이트</a></li>
				<li><a href="/down/2017서울상상력발전소_리플렛.zip">리플렛 다운로드</a></li>
				<li><a href="http://www.sewoonmap.net"  target="_blank">세운 안내도</a></li>
			</ul>
	    </nav>
		<div class="summary">
			<div class="date">2017.10.27-10.29</div>
			<p>세운상가 5층 실내광장</p>
		</div>		          
	</div>