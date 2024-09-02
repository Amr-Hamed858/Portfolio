import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const navbar = this.el.nativeElement.querySelector('.navbar'); // Adjust the class name as needed

    if (scrollPosition >= 50) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  }


  OpenCloseMenu(){
    
  let nav_links = document.getElementById("links");
    nav_links?.classList.toggle("active");
  }

}
