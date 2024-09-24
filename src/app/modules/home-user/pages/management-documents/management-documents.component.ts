import { Component } from '@angular/core';

@Component({
  selector: 'app-management-documents',
  templateUrl: './management-documents.component.html',
  styleUrls: ['./management-documents.component.css']
})
export class ManagementDocumentsComponent {

  documentos:any[] =[
    {name:"Documento1.docx",description:"docuemtno para andnajda",updateDate:"May 15,2024"},
    {name:"Documento2.docx",description:"docuemtno para asaaaaaaaa",updateDate:"May 11,2024"},
    {name:"Documento3.docx",description:"docuemtno paraasdasdasdasdasdasdasd",updateDate:"May 12,2024"},
  ]

}
