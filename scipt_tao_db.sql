drop database railway;

create database railway;
use railway;
# tên các table phải kết thúc bằng chữ s (tức là số nhiều đó)
# primary key luôn đặt tên là id, luôn có 2 trường là createAt và updateAt (quy định vậy)
#mấy bảng là thực thể yếu thì không cần id 
create table LoaiPhongs
(
	id int,
    primary key (id),
    Ten VARCHAR(30),
    DonGia int,
    image varchar(256),
    SLToida int DEFAULT 3,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);
create table Phongs
(
	id int,
    primary key (id),
    idLoaiPhong int,
    GhiChu nvarchar(1000),
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

create table Khachs
(
	id nvarchar(15),	#này là cmnd
	primary key (id),
	DiaChi nvarchar(50),
    LoaiKhach int,
    idQuanLy nvarchar(15),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

create table LoaiKhachs
(
	id int,	
	primary key (id),
	heso float,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);
create table hesophu # cái này thì chơi luật rừng tại nó đứng 1 mình
(
	heso float,
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);
create table SuDungs
(
	idDonDat int,
	CMNDKhach nvarchar(15),
    PRIMARY KEY (idDonDat,CMNDKhach)
);
create table DonDatPhongs
(
	id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
	CMNDKhach nvarchar(15),
    idPhong int,
	ngayTT datetime, # chua thanh toan de null
    ngayBD datetime,
    ngayKT datetime,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);
create table Accounts
(
	id nvarchar(15),
	CMNDKhach nvarchar(15),
	primary key (id),
	_password varchar(100),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

#
/*
create table
(
	id,	
	primary key (id),

    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
)
*/
alter table Phongs 
add constraint FK_Phongs_LoaiPhongs
foreign key (idLoaiPhong) references LoaiPhongs(id);

alter table Khachs 
add constraint FK_Khachs_LoaiKhachs
foreign key (LoaiKhach) references LoaiKhachs(id);

alter table DonDatPhongs
add constraint FK_DonDatPhongs_Khachs
foreign key (CMNDKhach) references Khachs(id);

alter table DonDatPhongs
add constraint FK_DonDatPhongs_Phongs
foreign key (idPhong) references Phongs(id);

alter table SuDungs
add constraint FK_SuDungs_DonDatPhongs
foreign key (idDonDat) references DonDatPhongs(id); 

alter table Khachs
add constraint FK_Khachs_Khachs
foreign key (idQuanLy) references Khachs(id);

alter table Accounts 
add constraint FK_ACcounts_Khachs
foreign key (CMNDKhach) references Khachs(id);

insert into LoaiPhongs(id,Ten,image,DonGia) values (1,'Superior King Room','https://s3-ap-southeast-1.amazonaws.com/blog-ph/wp-content/uploads/2016/08/12091211/hotel-room-marina-bay-sands.jpg?fbclid=IwAR2THjgS5DDepCHxF79YDpzP81m3osoUmdkVpnhG156hZ9HKm2y_3Ifp4HQ',100);
insert into LoaiPhongs(id,Ten,image,DonGia) values (2,'Superior Twin Room','https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg?fbclid=IwAR0RrI8LLOCUrqcIBZLUF2FSB7E33oIT858L_9mcMlweE3D8DunNnHPL8VA',200);
insert into LoaiPhongs(id,Ten,image,DonGia) values (3,'Superior Plus King Room','https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000&fbclid=IwAR0cVNxU2gfPwe_k3kOPBp6itzEfGTieiXmPjBsqzv-2d-1QQ0m0WihPpSo',300);

insert into Phongs(id,GhiChu) values (1,n'Looking out across magnificent panoramic views of Saigon, this well-appointed 38 sqm room offers the perfect balance of privacy and luxury.');
insert into Phongs(id,GhiChu) values (2,n'Ideal for both business and leisure travellers, timeless luxury and functional amenities unite, all with a stunning view of the city.');
insert into Phongs(id,GhiChu) values (3,n'Superior Plus King rooms offer exclusive space to relax, along with stunning views of cosmopolitan Saigon.');

update Phongs set idLoaiPhong = 1 where id=1;
update Phongs set idLoaiPhong = 2 where id=2;
update Phongs set idLoaiPhong = 3 where id=3;

insert into LoaiKhachs(id, HeSo) values(0,1.0);
insert into LoaiKhachs(id, HeSo) values(1,1.5);