$(function() {
    // lay box tab
    $('aside.widget_tab').each(function() {
        // console.log($(this));
        $(this).find('.tab-content .item').first().show();
        
        $(this).find('ul.nav-tab li').on('click', function() {
            // so thu tu duoc click vao va lay ra 
            var sott =  $(this).index();

            $(this).parents('aside.widget_tab').addClass('nguoiduocCHon');

                // .find('.tab-content .item')

                // .eq(sott).show()
                
                // .siblings('.tab-content .item').hide();

            // lay so index vu get duoc de :eq(1);


            // tim tab content vo so thu tu bang index vua lay duoc 
            console.log(sott);
              
            // $(this).find('.tab-content .item').eq(tabIndex).show();

        });

       

    });

   //$().css('display', 'block');
});

// $(document).ready(function() {

// });