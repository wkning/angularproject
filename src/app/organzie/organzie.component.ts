import { Component, OnInit } from '@angular/core';
import {flyIn} from '../animation/fly-in';

@Component({
  selector: 'app-organzie',
  templateUrl: './organzie.component.html',
  styleUrls: ['./organzie.component.css'],
  animations:[flyIn]
})
export class OrganzieComponent implements OnInit {
private orgName:string;
private orgCode:string;
private selectedNode:any;
private selectedName:any;
private orgTree = [
        {
            "label": "研发部",
            "data": "001",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{
                    "label": "移动事业部",
                    "data": "1-1",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {"label": "江苏", "icon": "fa-file-word-o", "data": "1-1-1"}, 
                        {"label": "浙江", "icon": "fa-file-word-o", "data": "1-1-2"}
                    ]
                },
                {
                    "label": "联通事业部",
                    "data": "1-2",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {"label": "江苏", "icon": "fa-file-word-o", "data": "1-2-1"},
                        {"label": "浙江", "icon": "fa-file-word-o", "data": "1-2-2"}
                    ]
                }]
        },
        {
            "label": "市场部",
            "data": "002",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },
        {
            "label": "行政部",
            "data": "003",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        },
        {
            "label": "财务部",
            "data": "004",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder"
        }
	]
  constructor() { }

  ngOnInit() {
  }
  
  nodeSelect(e){
  	this.orgName = e.node.label;
  	this.orgCode = e.node.data;
  	this.selectedName=e;
  }
	edit(){
		          
//		for(var item of this.orgTree){
//			this.selectedNode=item;
//			if(this.selectedNode){
//      if(!this.selectedNode.children){
//	            this.selectedNode.children=[];
//	            console.log(this.selectedNode)
//	        }
//      	this.selectedNode.children.push(newNode);
//	    	}else{
//	        this.orgTree.push(newNode);
//	    	}
//			}

		for(var item of this.orgTree){
			this.selectedNode=item;
			if(this.selectedName.node.label==item.label){
				item.label=this.orgName
			}else if(this.selectedNode.children!=undefined){
				for(var item1 of this.selectedNode.children){
					this.selectedNode=item1;
					if(this.selectedNode.label==this.selectedName.node.label){
						this.selectedNode.label=this.orgName
					}else if(this.selectedNode.children!=undefined){
						for(var item2 of this.selectedNode.children){
							if(this.selectedName.node.label==item2.label){
								item2.label=this.orgName;
							}
						}
					}
				}
			}
		}
		}
	add(){
		var newNode:any={
                label:this.orgName,
                data:this.orgCode,
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder"
           };
    var newNode1:any={
                label:this.orgName,
                data:this.orgCode,
                icon: "fa-file-word-o",
           };
    for(var additem of this.orgTree){
			this.selectedNode=additem;
			if(!this.selectedNode.children){
				this.selectedNode.children=[];
			}
			if(this.selectedName.node.label==this.selectedNode.label){
				this.selectedNode.children.push(newNode);
			}
			for(var additem1 of this.selectedNode.children){
					this.selectedNode=additem1;
					if(!this.selectedNode.children){
						this.selectedNode.children=[];
					}
					if(this.selectedName.node.label==this.selectedNode.label){
						this.selectedNode.children.push(newNode1);
					}
			}
		}
	}
	del(){
		var arr=[]
		for(var delitem of this.orgTree){
			this.selectedNode=delitem;
			if(this.selectedName.node.label!==this.selectedNode.label){
				arr.push(this.selectedNode)
			}
			if(this.selectedNode.children){
				var arr1=[];
				for(var delitem1 of this.selectedNode.children){
					this.selectedNode=delitem1;
					if(this.selectedName.node.label!==this.selectedNode.label){
						arr1.push(this.selectedNode);
					}
					if(this.selectedNode.children){
						var arr2=[];
						for(var delitem3 of this.selectedNode.children){
							this.selectedNode=delitem3;
							if(this.selectedName.node.data==this.selectedNode.data){
								
							}else{
								arr2.push(this.selectedNode);
							}
						}
					}
				}
				for(var delitem2 of arr){
					delitem2.children=arr1
				}
			}
			
		}
		this.orgTree=arr;
	}
}
