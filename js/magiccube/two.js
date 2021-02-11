		var face_size = 200;
		var block_size = 80;
		var r_speed = 15;
		var r_x = 0;
		var r_y = 0;
		var r_z = 0;
		function CreateBrick(_x, _y, _z, _face0, _face1, _face2)
		{
			temp = new Object();
			temp.coord = new Array(_x, _y, _z);
			temp.faces = new Array();
			temp.faces[0] = _face0;
			temp.faces[1] = _face1;
			temp.faces[2] = _face2;
			temp.up = new Array();
			temp.up[0] = _face0 % 6;
			temp.up[1] = _face1 % 6;
			temp.up[2] = _face2 % 6;
			return temp;
		}
		var brick = new Array();
		brick[0] = CreateBrick(0, 0, 0, 0, 7, 11);
		brick[1] = CreateBrick(0, 0, 1, 1, 8, 23);
		brick[2] = CreateBrick(0, 1, 0, 12, 22, 19);
		brick[3] = CreateBrick(0, 1, 1, 10, 20, 13);
		brick[4] = CreateBrick(1, 0, 0, 3, 6, 5);
		brick[5] = CreateBrick(1, 0, 1, 2, 9, 17);
		brick[6] = CreateBrick(1, 1, 0, 15, 16, 18);
		brick[7] = CreateBrick(1, 1, 1, 4, 21, 14);
		block = document.getElementsByClassName("block");
		color = new Array();
		color[0] = "red";
		color[1] = "yellow";
		color[2] = "blue";
		color[3] = "green";
		color[4] = "white";
		color[5] = "purple";
		for (i = 0;i < 4;++i)
			for (j = 0;j < 6;++j)
				block[j + i * 6].style.backgroundColor = color[j];
		ori_style = new Array();
		appendix_order = new Array();
		_half = face_size / 2;
		_quarter = _half / 2;
		appendix_order[0] = " translate(-"+ _quarter +"px, -" + _quarter + "px) ";
		appendix_order[1] = " translate("+ _quarter +"px, -" + _quarter + "px) ";
		appendix_order[2] = " translate(-"+ _quarter +"px, " + _quarter + "px) ";
		appendix_order[3] = " translate("+ _quarter +"px, " + _quarter + "px) ";
		for (i = 0;i < 4;++i)
		{
			ori_style[0 + i * 6] = "rotateY(90deg) translate("+_half+"px, 0) rotateY(90deg)" + appendix_order[i];
			ori_style[1 + i * 6] = "translate("+_half+"px, 0) rotateY(90deg)" + appendix_order[i];
			ori_style[2 + i * 6] = "rotateY(90deg) translate(-"+_half+"px, 0) rotateY(-90deg)" + appendix_order[i];
			ori_style[3 + i * 6] = "translate(-"+_half+"px, 0) rotateY(-90deg)" + appendix_order[i];
			ori_style[4 + i * 6] = "translate(0, "+_half+"px) rotateX(-90deg)" + appendix_order[i];
			ori_style[5 + i * 6] = "translate(0, -"+_half+"px) rotateX(90deg)" + appendix_order[i];
		}
		function render()
		{
			rotate_order = " rotateX(" + r_x + "deg) " + "rotateY(" + r_y + "deg) " +  "rotateZ(" + r_z + "deg) ";
			for (i = 0;i < 24;++i)
				block[i].style.webkitTransform = rotate_order + move_record[i].make_order() + ori_style[i];
			
		}
		var mouse_x, mouse_y;
		var mouse_flag = false;
		function mouse_move(event)
		{
			if (mouse_flag)
			{
				r_y += event.clientX - mouse_x;
				r_x -= event.clientY - mouse_y;
				mouse_x = event.clientX;
				mouse_y = event.clientY;
				render();
			}
		}
		function mouse_down(event)
		{
			mouse_x = event.clientX;
			mouse_y = event.clientY;
			mouse_flag = true;
		}
		function mouse_up(event)
		{
			mouse_flag = false;
		}
		function key_down(event)
		{
			if(window.event) // IE
			{
			  keynum = event.keyCode
			}
			else if(event.which) // Netscape/Firefox/Opera
			{
			  keynum = event.which
			}
			switch (keynum)
			{
				case 65:Action(0);break;//A
				case 90:Action(1);break;//Z
				case 83:Action(2);break;//S
				case 88:Action(3);break;//X
				case 68:Action(4);break;//D
				case 67:Action(5);break;//C
				case 70:Action(6);break;//F
				case 86:Action(7);break;//V
				case 71:Action(8);break;//G
				case 66:Action(9);break;//B
				case 72:Action(10);break;//H
				case 78:Action(11);break;//N
			}
			render();
		}
		function CreateMoveRecord()
		{
			temp = new Object();
			temp.m = new Array(0, 0, 0);
			temp.order = '';
			temp.move = function(_way)
			{
				switch(_way)
				{
					case 0: this.m[0] = (this.m[0] + r_speed) % 360;break;
					case 1: this.m[0] = (this.m[0] - r_speed) % 360;break;
					case 2: this.m[1] = (this.m[1] + r_speed) % 360;break;
					case 3: this.m[1] = (this.m[1] - r_speed) % 360;break;
					case 4: this.m[2] = (this.m[2] + r_speed) % 360;break;
					case 5: this.m[2] = (this.m[2] - r_speed) % 360;break;
				}
				render();
			}
			temp.make_order = function()
			{
				this.order = " rotateX(" + this.m[0] + "deg) " + " rotateY(" + this.m[1] + "deg) " + " rotateZ(" + (this.m[2]) + "deg) ";
				return this.order;
			}
			return temp;
		}
		var move_record = new Array();
		for (i = 0;i < 24;++i)
			move_record[i] = CreateMoveRecord();
		var animation_count = new Array(0, 0, 0, 0);
		var up_mark;
		function Move(_which, _way, _animation_index, _next)
		{
			if (animation_count[_animation_index] == 90 / r_speed - 1)
			{
				
				animation_count[_animation_index] = 0;
				var ii, kk;
				for (ii = 0;ii < 3;++ii)
					if (brick[_which].up[ii] == up_mark)
						break;
				for (kk = 0;kk < 3;++kk)
					if (brick[_next].up[kk] == up_mark)
						break;
				for (mm = 0;mm < 3;++mm)
				{
					aim = brick[_next].faces[(kk + mm) % 3];
					ori = brick[_which].faces[(ii + mm) % 3];
					block[ori].style.backgroundColor = copy_color[aim];
				}
				for (i1 = 0;i1 < 3;++i1)
				{
					for (i2 = 0;i2 < 3;++i2)
						move_record[brick[_which].faces[i1]].m[i2] = 0;
				}
				render();
				return;
			}
			var i;
			for (i = 0;i < 3;++i)
			{
				move_record[brick[_which].faces[i]].move(_way);
			}
			++animation_count[_animation_index];
			setTimeout("Move(" + _which + ", " + _way + ", " + _animation_index + ", " + _next + ")", 20);
		}
		var copy_color = new Array();
		function Action(_ori_way)
		{
			if (Math.max(animation_count[0], animation_count[1], animation_count[2], animation_count[3]) > 0){
				return;
			}
			for (i = 0;i < 24;++i)
				copy_color[i] = block[i].style.backgroundColor;
			var _way = _ori_way % 6;
			switch(_ori_way)
			{
				case 0: up_mark = 1;break;
				case 1: up_mark = 1;break;
				case 2: up_mark = 5;break;
				case 3: up_mark = 5;break;
				case 4: up_mark = 0;break;
				case 5: up_mark = 0;break;
				case 6: up_mark = 3;break;
				case 7: up_mark = 3;break;
				case 8: up_mark = 4;break;
				case 9: up_mark = 4;break;
				case 10: up_mark = 2;break;
				case 11: up_mark = 2;break;
			}
			var i;
			var sequence1 = new Array(0, 0, 1, 1);
			var sequence2 = new Array(0, 1, 1, 0);
			var seq_way1 = new Array(0, 0, 1, 1, 2, 2);
			var seq_way2 = new Array(1, 2, 0, 2, 1, 0);
			var seq_way3 = new Array(2, 1, 2, 0, 0, 1);
			var temp_index = 0;
			for (i = 0;i < 8;++i)
			{
				if (brick[i].coord[seq_way1[_way]] == Math.floor(_ori_way / 6))
				{
					var next_color;
					for (j = 0;j < 4;++j)
					{
						if (brick[i].coord[seq_way2[_way]] == sequence1[j] && brick[i].coord[seq_way3[_way]] == sequence2[j])
						{
							brick[i].coord[seq_way2[_way]] = sequence1[(j + 1) % 4];
							brick[i].coord[seq_way3[_way]] = sequence2[(j + 1) % 4];
							for (k = 0;k < 8;++k)
							{
								if (brick[k].coord[0] == brick[i].coord[0]
									&& brick[k].coord[1] == brick[i].coord[1]
									&& brick[k].coord[2] == brick[i].coord[2]
									&& k != i)
								{
									next_color = k;
									break;
								}
							}
							brick[i].coord[seq_way2[_way]] = sequence1[j];
							brick[i].coord[seq_way3[_way]] = sequence2[j];
							break;
						}
					}
					Move(i, _way, temp_index, next_color);
					++temp_index;
				}
			}
		}
		render();
