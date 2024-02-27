import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter

constructor() {}
ngOnInit() {}

toggleSideBar() {
  this.toggleSidebarForMe.emit();
  
  setTimeout(()=>{window.dispatchEvent(new Event ('resize') ); },

  300
  );

}

}
