import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1RVXhRpPlbHOQppeou06NR_2yDl1vNXMCQ&s"
  contentTitle:string="Scène champêtre (Rébecca à la fontaine)"
  contentDescription:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,nisi vel consectetur interdum "

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(__values =>
      console.log(__values.get("Id"))
    )
  }

}

