<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Textbox Events
    document.addEventListener('focusin', (event) => {
      if (event.target.matches('navbar input.search-textbox')) {
        if (event.target.value.length <= 0) {
          const parent = event.target.closest('div.search');
          parent.classList.add('focused');
        }
      }
    });

    document.addEventListener('focusout', (event) => {
      if (event.target.matches('navbar input.search-textbox')) {
        if (event.target.value.length <= 0) {
          const parent = event.target.closest('div.search');
          parent.classList.remove('focused');
        }
      }
    });

    document.addEventListener('click', (event) => {
      if (event.target.closest('navbar .search')) {
        const input = event.target.closest('navbar .search').querySelector('input.search-textbox');
        input.focus();
      }
    });

    // Text Key Events for Animating Icons
    document.addEventListener('keyup', (event) => {
      if (event.target.matches('navbar input.search-textbox')) {
        const parent = event.target.closest('div.search');
        const phrase = event.target.value;
        const phraseLength = phrase.length;

        if (phraseLength >= 2) {
          parent.classList.add('multi-char');
          if (!parent.classList.contains('not-null')) {
            parent.classList.add('not-null');
          }
        } else if (phraseLength === 1) {
          parent.classList.add('not-null');
          parent.classList.remove('multi-char');
        } else if (phraseLength <= 0) {
          parent.classList.remove('not-null');
          parent.classList.remove('multi-char');
        }
      }
    });

    // Tab Highlighter Functionality
    const TabHighlighter = {
      set: function (element) {
        const rect = element.closest('li').getBoundingClientRect();
        const highlighter = document.querySelector('.tab-highlighter');
        highlighter.style.left = rect.left + 'px';
        highlighter.style.width = rect.width + 'px';
      },
      refresh: function () {
        const activeTab = document.querySelector('.tabs ul.navbar-body li.active a');
        if (activeTab) {
          TabHighlighter.set(activeTab);
        }
      }
    };

    document.addEventListener('click', (event) => {
      if (event.target.matches('navbar .tabs ul.navbar-body li a')) {
        const activeTab = event.target.closest('li');
        TabHighlighter.set(event.target);
        activeTab.parentElement.querySelector('.active')?.classList.remove('active');
        activeTab.classList.add('active');
      }
    });

    window.addEventListener('resize', () => {
      TabHighlighter.refresh();
    });

    TabHighlighter.refresh();
  });
</script>


<style>
  /*Styling links*/
navbar a{
    font-size: 16px;
    font-weight: 300;
    font-family: "po", sans-serif;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    padding: 2px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    border-radius:2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor:pointer;
    margin: 18px;
}
navbar a:hover, navbar a:active, navbar a{
    text-decoration: none;
    color: rgba(0,0,0,0.6);
}
navbar a:hover{
    background: rgba(0,0,0,0.06);
}
navbar a:active{
    color: rgba(0,0,0,0.9);
    background: rgba(0,0,0,0.1);
}
navbar a{
    color: #5bc0de;
    font-family: "poiret", sans-serif;
    font-weight: 500;
    font-size: 14px;
    float: right;
}

/*Shadow*/
navbar .paper-shadow-bottom-z-2 {
    box-shadow: 0 8px 17px 0 rgba(0,0,0,.2);
}

/*Setting Up Navbar Layouts*/
navbar .navbar-inverse{
    color: #000;
    background: black;
    border:none;
    min-height: 50px;
    max-height: 50px;
    height: 50px;
}
navbar .container-fluid{
    position: absolute;
    top:0; bottom: 0;
    right:0;
    left:0;
}
navbar .navbar-body{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
}
navbar div.navbar-end{
    align-items: flex-start;
    -webkit-align-items: flex-start;
}
navbar div.navbar-start,
navbar div.navbar-end{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-around;
}
navbar div.navbar-start .logo{
    opacity: 0.6;
    width:30px;
}

/*Integrating Two Navbars Together*/
navbar .nav{
    z-index: 2;
}
navbar .tabs{
    z-index: 1;
    position: relative;
}





/*Styling Tabs*/
navbar .tabs .navbar-body li.active a{
    color: #333;
}
navbar .tabs .navbar-body li{
    -webkit-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    -moz-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    -ms-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    -o-transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
    transition: all 0.2s cubic-bezier(0.21, 0.61, 0.36, 1);
}
navbar .tabs .navbar-body li:hover{
    background: rgba(0,0,0,0.02);
}
navbar .tabs .navbar-body li:active{
    background: rgba(0,0,0,0.05);
}
navbar .tabs .navbar-body li a:hover, .tabs .navbar-body li a:active{
    background: rgba(0,0,0,0);
    color: #5bc0de;
}

/*Styling Tab Highlighter*/
navbar .tab-highlighter{
    height:2px;
    width: 50px;
    margin-top: -2px;
    background: #000;
    position: absolute;
    -webkit-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    -moz-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    -ms-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    -o-transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
    transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
}

/*Keyframes*/
@keyframes SwiftSlide {
    100%{
        margin-right: 0;
        opacity: 1;
    }
}
@keyframes SwiftSlideToRight {
    100%{
        opacity:0;
        margin-right: -30px;
    }
}
</style>

<navbar>
 
   
  <div class="navbar  navbar-inverse tabs paper-shadow-bottom-z-2">
    <div class="container-fluid">
      <ul class="navbar-body list-inline">
        <li class="active"><a class="active">Home</a></li>
        <li><a>Potion Lab</a></li>
        <li><a>Stats</a></li>
        <li><a>System Log Feed</a></li>
      </ul>
      <div class="tab-highlighter"></div>
    </div>
  </div>

</navbar>