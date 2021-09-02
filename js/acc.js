$(document).ready(function(){
    // datepicker
    $( function() {
        $( "#datepicker" ).datepicker();
    } );

    //   count down
    $('#getting-started').countdown('2021/09/10', function(event) {
        $(this).html(event.strftime('2 weeks 3 days 23:58:30'));
    });

    // animation
    $( function() {
        var state = true;
        $( "#button" ).on( "click", function() {
          if ( state ) {
            $( "#effect" ).animate({
              backgroundColor: "green",
              color: "#fff",
              width: 500
            }, 1000 );
          } else {
            $( "#effect" ).animate({
              backgroundColor: "#fff",
              color: "#000",
              width: 300
            }, 1000 );
          }
          state = !state;
        });
    } );

    // progress bar

    $( function() {
        var progressTimer,
          progressbar = $( "#progressbar" ),
          progressLabel = $( ".progress-label" ),
          dialogButtons = [{
            text: "Cancel Download",
            click: closeDownload
          }],
          dialog = $( "#dialog" ).dialog({
            autoOpen: false,
            closeOnEscape: false,
            resizable: false,
            buttons: dialogButtons,
            open: function() {
              progressTimer = setTimeout( progress, 2000 );
            },
            beforeClose: function() {
              downloadButton.button( "option", {
                disabled: false,
                label: "Start Download"
              });
            }
          }),
          downloadButton = $( "#downloadButton" )
            .button()
            .on( "click", function() {
              $( this ).button( "option", {
                disabled: true,
                label: "Downloading..."
              });
              dialog.dialog( "open" );
            });
     
        progressbar.progressbar({
          value: false,
          change: function() {
            progressLabel.text( "Current Progress: " + progressbar.progressbar( "value" ) + "%" );
          },
          complete: function() {
            progressLabel.text( "Complete!" );
            dialog.dialog( "option", "buttons", [{
              text: "Close",
              click: closeDownload
            }]);
            $(".ui-dialog button").last().trigger( "focus" );
          }
        });
     
        function progress() {
          var val = progressbar.progressbar( "value" ) || 0;
     
          progressbar.progressbar( "value", val + Math.floor( Math.random() * 3 ) );
     
          if ( val <= 99 ) {
            progressTimer = setTimeout( progress, 50 );
          }
        }
     
        function closeDownload() {
          clearTimeout( progressTimer );
          dialog
            .dialog( "option", "buttons", dialogButtons )
            .dialog( "close" );
          progressbar.progressbar( "value", false );
          progressLabel
            .text( "Starting download..." );
          downloadButton.trigger( "focus" );
        }
    } );

    // timepicker
    $('#timepicker').timepicker({
        timeFormat: 'h:mm:ss',
        interval: 60,
        minTime: '10',
        maxTime: '6:00pm',
        defaultTime: '11',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    // position
    $( function() {
        function left( element, using ) {
          element.position({
            my: "right middle",
            at: "left+25 middle",
            of: "#container",
            collision: "none",
            using: using
          });
        }
        function right( element, using ) {
          element.position({
            my: "left middle",
            at: "right-25 middle",
            of: "#container",
            collision: "none",
            using: using
          });
        }
        function center( element, using ) {
          element.position({
            my: "center middle",
            at: "center middle",
            of: "#container",
            using: using
          });
        }
     
        left( $( "img:eq(0)" ) );
        center( $( "img:eq(1)" ) );
        right( $( "img:eq(2)" ) );
     
        function animate( to ) {
          $( this ).stop( true, false ).animate( to );
        }
        function next( event ) {
          event.preventDefault();
          center( $( "img:eq(2)" ), animate );
          left( $( "img:eq(1)" ), animate );
          right( $( "img:eq(0)" ).appendTo( "#container" ) );
        }
        function previous( event ) {
          event.preventDefault();
          center( $( "img:eq(0)" ), animate );
          right( $( "img:eq(1)" ), animate );
          left( $( "img:eq(2)" ).prependTo( "#container" ) );
        }
        $( "#previous" ).on( "click", previous );
        $( "#next" ).on( "click", next );
     
        $( "img" ).on( "click", function( event ) {
          $( "img" ).index( this ) === 0 ? previous( event ) : next( event );
        });
     
        $( window ).on( "resize", function() {
          left( $( "img:eq(0)" ), animate );
          center( $( "img:eq(1)" ), animate );
          right( $( "img:eq(2)" ), animate );
        });
      } );






})