create database QLKhachSan;
use QLKhachSan;
# tên các table phải kết thúc bằng chữ s (tức là số nhiều đó)
# primary key luôn đặt tên là id, luôn có 2 trường là createAt và updateAt (quy định vậy)
#mấy bảng là thực thể yếu thì không cần id 
create table LoaiPhongs
(
	id char,
    primary key (id),
    DonGia int,
    SLToida int DEFAULT 3,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    constraint CHK_DonGia CHECK(id in ('A','B','C'))
);
create table Phongs
(
	id NVARCHAR(10),
    primary key (id),
    LoaiPhong char,
    GhiChu nvarchar(50),
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
    idPhong NVARCHAR(10),
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

    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
)

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
foreign key (LoaiPhong) references LoaiPhongs(id);

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

insert into Phongs(id,GhiChu) values ('E104',n'Phòng víp lắm luôn á');
insert into Phongs(id,GhiChu) values ('E105',n'Phòng hơi đẹp');

insert into LoaiPhongs(id,DonGia) values ('A',150000);
insert into LoaiPhongs(id,DonGia) values ('B',170000);
insert into LoaiPhongs(id,DonGia) values ('C',200000);

update Phongs set LoaiPhong = 'A' where id='E104';
update Phongs set LoaiPhong = 'B' where id='E105';
