// 퍼블리싱 UI 확인용: 01-10-06과 동일한 날짜 형식 및 달력 설정
$(function () {
    $('.datepicker1').datepicker({
        showAnim: 'fadeIn',
        dateFormat: 'yymmdd',
        prevText: '이전달',
        nextText: '다음달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showOn: 'button',
        buttonText: '달력 열기',
        buttonImage: '../../default/images/renewal/common/ico_calendar2.svg',
        showMonthAfterYear: true,
        changeMonth: true,
        changeYear: true,
        yearSuffix: '',
        yearRange: 'c-30:c+30',
        beforeShow: function (input) {
            if (input.disabled) return false;
            $(input).prop('readonly', true);
        },
        onClose: function () {
            $(this).prop('readonly', false);
        }
    });

    $('.ico_cal .datepicker1').datepicker('option', {
        buttonImage: '',
        buttonImageOnly: false
    });

    $('#ui-datepicker-div').on('mouseover focusin', '.ui-datepicker-prev, .ui-datepicker-next', function () {
        if (this.hasAttribute('title')) {
            $(this).attr('aria-label', $(this).attr('title')).removeAttr('title');
        }
    });
});
