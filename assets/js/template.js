

function loadMap(){
  var mymap = L.map('mapid').setView([20.6685758,-103.3457626], 15);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 30,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibG9wZXI2MzEiLCJhIjoiY2tjb3llOWo4MDYxbzJ4cmdzYzYzZm95cSJ9.nq7X7geh7Ys_lGR6VkA9pg'
  }).addTo(mymap);

  L.marker([20.6685758,-103.3457626]).addTo(mymap);
  mymap.scrollWheelZoom.disable();
  mymap.on('click', () => { mymap.scrollWheelZoom.enable();});
  mymap.on('mouseout', () => { mymap.scrollWheelZoom.disable();});
}

function activarMenu(menu, submenu = ''){
  $(".nav-item").removeClass("active");
  document.getElementById(menu).classList.add("show");
  document.getElementById(menu).parentElement.classList.add("active");
  console.log('1', $(".nav-link").removeClass("active"));
  //document.getElementsByClassName("nav-link").classList.remove("active");
  console.log(submenu);
  if(submenu!=''){
    document.getElementById(submenu).classList.add("active");
  }
}


//function initTemplate(){
  (function($) {
    'use strict';
    $(function() {
  
      var body = $('body');
      var mainWrapper = $('.main-wrapper');
      var footer = $('footer');
      var sidebar = $('.sidebar');
      var navbar = $('.navbar').not('.top-navbar');

      $(".loading").fadeOut(400);
  
      // Enable feather-icons with SVG markup
      feather.replace();
  
      // initializing bootstrap tooltip
      $('[data-toggle="tooltip"]').tooltip();
  
      // initialize clipboard plugin
      if ($('.btn-clipboard').length) {
        var clipboard = new ClipboardJS('.btn-clipboard');
  
        // Enabling tooltip to all clipboard buttons
        $('.btn-clipboard').attr('data-toggle', 'tooltip').attr('title', 'Copy to clipboard');
  
        // initializing bootstrap tooltip
        $('[data-toggle="tooltip"]').tooltip();
  
        // initially hide btn-clipboard and show after copy
        clipboard.on('success', function(e) {
          e.trigger.classList.value = 'btn btn-clipboard btn-current'
          $('.btn-current').tooltip('hide');
          e.trigger.dataset.originalTitle = 'Copied';
          $('.btn-current').tooltip('show');
          setTimeout(function(){
              $('.btn-current').tooltip('hide');
              e.trigger.dataset.originalTitle = 'Copy to clipboard';
              e.trigger.classList.value = 'btn btn-clipboard'
          },1000);
          e.clearSelection();
        });
      }
  
  
      // Applying perfect-scrollbar 
      if ($('.sidebar .sidebar-body').length) {
        const sidebarBodyScroll = new PerfectScrollbar('.sidebar-body');
      }
      if ($('.content-nav-wrapper').length) {
        const contentNavWrapper = new PerfectScrollbar('.content-nav-wrapper');
      }
  
  
      // Sidebar toggle to sidebar-folded
      $('.sidebar-toggler').on('click', function(e) {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        
        $('.secondary-logo').toggleClass('secondary-logo-active');
        
        if (window.matchMedia('(min-width: 992px)').matches) {
          e.preventDefault();
          body.toggleClass('sidebar-folded');
        } else if (window.matchMedia('(max-width: 991px)').matches) {
          e.preventDefault();
          body.toggleClass('sidebar-open');
        }
      });
  
      // Settings sidebar toggle
      $('.settings-sidebar-toggler').on('click', function(e) {
        $('body').toggleClass('settings-open');
      });
  
      // Sidebar theme settings
      $("input:radio[name=sidebarThemeSettings]").click(function() {
        $('body').removeClass('sidebar-light sidebar-dark');
        $('body').addClass($(this).val());
       })
  
      // sidebar-folded on large devices
      function iconSidebar(e) {
        if (e.matches) {
          body.addClass('sidebar-folded');
        } else {
          body.removeClass('sidebar-folded');
        }
      }
      var desktopMedium = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
      desktopMedium.addListener(iconSidebar);
      iconSidebar(desktopMedium);
  
      //Add active class to nav-link based on url dynamically
      function addActiveClass(element) {
        console.log("Jesus ",element);
          if (current === "") {
            //for root url
            if (element.attr('href').indexOf("index.html") !== -1) {
              element.parents('.nav-item').last().addClass('active');
              if (element.parents('.sub-menu').length) {
                element.closest('.collapse').addClass('show');
                element.addClass('active');
              }
            }
          } else {
            //for other url
            if (element.attr('href').indexOf(current) !== -1) {
              element.parents('.nav-item').last().addClass('active');
              if (element.parents('.sub-menu').length) {
                element.closest('.collapse').addClass('show');
                element.addClass('active');
              }
              if (element.parents('.submenu-item').length) {
                element.addClass('active');
              }
            }
          }
      }
  
        var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
        $('.nav li a', sidebar).each(function() {
          var $this = $(this);
          addActiveClass($this);
        });
  
      $('.horizontal-menu .nav li a').each(function() {
        var $this = $(this);
        addActiveClass($this);
      })
  
      //  open sidebar-folded when hover
      $(".sidebar .sidebar-body").hover(
      function () {
        if (body.hasClass('sidebar-folded')){
          body.addClass("open-sidebar-folded");
        }
      },
      function () {
        if (body.hasClass('sidebar-folded')){
          body.removeClass("open-sidebar-folded");
        }
      });
  
    // close sidebar when click outside on mobile/table    
      $(document).on('click touchstart', function(e){
        e.stopPropagation();
  
        // closing of sidebar menu when clicking outside of it
        if (!$(e.target).closest('.sidebar-toggler').length) {
          var sidebar = $(e.target).closest('.sidebar').length;
          var sidebarBody = $(e.target).closest('.sidebar-body').length;
          if (!sidebar && !sidebarBody) {
          if ($('body').hasClass('sidebar-open')) {
            $('body').removeClass('sidebar-open');
          }
          }
        }
      });
  
      // initializing popover
      $('[data-toggle="popover"]').popover();
  
      //checkbox and radios
      $(".form-check label,.form-radio label").append('<i class="input-frame"></i>');
      
      //Horizontal menu in mobile
      $('[data-toggle="horizontal-menu-toggle"]').on("click", function() {
        $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
      });
      // Horizontal menu navigation in mobile menu on click
      var navItemClicked = $('.horizontal-menu .page-navigation >.nav-item');
      navItemClicked.on("click", function(event) {
        if(window.matchMedia('(max-width: 991px)').matches) {
          if(!($(this).hasClass('show-submenu'))) {
            navItemClicked.removeClass('show-submenu');
          }
          $(this).toggleClass('show-submenu');
        }        
      })
  
      $(window).scroll(function() {
        if(window.matchMedia('(min-width: 992px)').matches) {
          var header = $('.horizontal-menu');
          if ($(window).scrollTop() >= 60) {
            $(header).addClass('fixed-on-scroll');
          } else {
            $(header).removeClass('fixed-on-scroll');
          }
        }
      });
  
    });
    
  var target = document.querySelector("footer");
  var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
  var rootElement = document.documentElement
  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollToTopBtn.classList.add("showBtn")
      } else {
        scrollToTopBtn.classList.remove("showBtn")
      }
    });
  }
    /*function scrollToTop() {
      rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
      })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    let observer = new IntersectionObserver(callback);
    observer.observe(target);*/
  })(jQuery);
//}
function getValorCuerpoDocumento(){
  return tinymce.get("tinymceExample").getContent()
}
function getValorTags(){
  if($("#tags").val()){
    return $("#tags").val();
  }else{
    //alert("no hay tags");
  }
}
function setValorTags(valor){
  try {
    document.getElementById("tags_tag").value = valor;
  } catch (error) {
    window.location.reload();
  } 
}
function lockTinymce(){
  tinyMCE.get('tinymceExample').getBody().setAttribute('contenteditable', false);
}
function lockTagsInput(){
  $('.tagsinput input').attr('disabled', 'disabled');
}

function closeModal(id_modal){
  document.getElementById(id_modal).click();
}