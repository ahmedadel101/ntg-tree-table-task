import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';
import { TreeTable, Children } from './tree-table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeTableModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ntg-tree-table-task';
  files: any[] = []

  treeTable: any[] = [
    { id: 1, name: 'CO', managerID: null },
    { id: 6, name: 'M6', managerID: null },
    { id: 2, name: 'VP', managerID: 1 },
    { id: 3, name: 'M1', managerID: 6 },
    { id: 4, name: 'M2', managerID: 2 },
    { id: 5, name: 'M3', managerID: 3 },
  ]

  ngOnInit(): void {
    // make Object empty
    const obj: any = {};
    // first make loop
    this.treeTable.forEach((element: any) => {
      //then make inside obj objects by ides
      obj[element.id] = { label: element.name, data: element, children: [] };
      console.log(obj);
      if (element.managerID != null) {
        //then make if managerID  != null ? push it as a child
        obj[element.managerID].children.push(obj[element.id])
        // this log you will see parent with child but can`t push element in files here cuz don't dublicate elements
        console.log(obj);
      } else {
        // else  managerId == null
        // and here we can push in files cuz you will push parent only
        this.files.push(obj[element.id])
        console.log(this.files);
      }
    });
  }
}
