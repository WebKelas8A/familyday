function searchNav() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search__nav');
    filter = input.value.toUpperCase();
    ul = document.getElementById("all-nav");
    li = ul.getElementsByClassName("list");
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } 
      else {
        li[i].style.display = "none";
      }
    }
  }

