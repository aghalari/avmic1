/* ============================================================
 
 Template Name: MARS - Responsive Coming Soon
 Author: Marwa El-Manawy -- http://elmanawy.info
 Description: MARS - Responsive Coming Soon.
 Version: 1.0
 
 ===============================================================
 */


/*================================================
 [  START LIST OF SCRIPTS ]
 ================================================
 
 :: Count Down
 :: Tooltip
 :: Wow animation
 :: Subscribe
 :: Subscribe
 
 ======================================
 [ End table content ]
 ======================================*/

/* COUNT DOWN
 ======================================*/
var newYear = new Date();
newYear = new Date(2020, 12 - 1, 25);
$('.defaultCountdown').countdown({until: newYear, format: 'DHMS'});

/* TOOLTIP
 ======================================*/
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* WOW ANIMATION
 ======================================*/
new WOW().init();

/* SUBSCRIBE
 ======================================*/
$("#subscriber_form").submit(function (e)
{
    $('#show_subscriber_msg').html('<div class=gen>در حال ارسال ...</div>');
    var subscriberemail = $('#subscriberemail').val();
    var formURL = $(this).attr("action");
    var data = {
        subscriberemail: subscriberemail
    }
    $.ajax(
            {
                url: formURL,
                type: "POST",
                data: data,
                success: function (res) {
                    if (res == '1') {
                        $('#show_subscriber_msg').html('<div class=gen> از شما بسیار سپاسگزارم ، هنگامی که سایت آماده شد به شما اطلاع خواهیم داد. </div>');
                    }

                    if (res == '5') {
                        $('#show_subscriber_msg').html('<div class=err> لطفا یک آدرس ایمیل معتبر وارد کنید </div>');
                    }
                }
            });
    e.preventDefault();
});

/* SUBSCRIBE
 ======================================*/
$("#contact_form").on("submit", function (e)
{
    $('#show_contact_msg').html('<div class=gen>در حال ارسال پیام ...</div>');
    var username = $('#contact_name').val();
    var useremail = $('#contact_email').val();
    var userphone = $('#contact_phone').val();
    var commenttext = $('#contact_text').val();
    var formURL = $(this).attr("action");
    var data = {
        username: username,
        useremail: useremail,
        userphone: userphone,
        commenttext: commenttext,
    }
    $.ajax(
            {
                url: formURL,
                type: "POST",
                data: data,
                success: function (res) {
                    if (res == '1') {
                        $('#show_contact_msg').html('<div class=gen><i class="fa fa-smile-o" aria-hidden="true"></i> از شما بسیار سپاسگزارم ، هنگامی که سایت آماده شد به شما اطلاع خواهیم داد. </div>');
                    }

                    if (res == '5') {
                        $('#show_contact_msg').html('<div class=err><i class="fa fa-frown-o" aria-hidden="true"></i> لطفا یک آدرس ایمیل معتبر وارد کنید </div>');
                    }
                }
            });
    e.preventDefault();
});