import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("GolfClubs",{schema:"public" } )
export class GolfClubs {

    @Column("text",{ 
        nullable:false,
        primary:true,
        name:"facility_id"
        })
    facility_id:string;
        

    @Column("text",{ 
        nullable:true,
        name:"club_name"
        })
    club_name:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"club_membership"
        })
    club_membership:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"number_of_holes"
        })
    number_of_holes:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"address"
        })
    address:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"city"
        })
    city:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"state"
        })
    state:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"country"
        })
    country:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"postal_code"
        })
    postal_code:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"phone"
        })
    phone:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"fax"
        })
    fax:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"website"
        })
    website:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"longitude"
        })
    longitude:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"latitude"
        })
    latitude:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"contact_name"
        })
    contact_name:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"contact_title"
        })
    contact_title:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"email_address"
        })
    email_address:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"driving_range"
        })
    driving_range:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"putting_green"
        })
    putting_green:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"chipping_green"
        })
    chipping_green:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"practice_bunker"
        })
    practice_bunker:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"motor_cart"
        })
    motor_cart:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"pull_cart"
        })
    pull_cart:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"golf_clubs_rental"
        })
    golf_clubs_rental:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"club_fitting"
        })
    club_fitting:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"pro_shop"
        })
    pro_shop:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"golf_lessons"
        })
    golf_lessons:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"caddie_hire"
        })
    caddie_hire:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"restaurant"
        })
    restaurant:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"reception_hall"
        })
    reception_hall:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"changing_room"
        })
    changing_room:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"lockers"
        })
    lockers:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"lodging_on_site"
        })
    lodging_on_site:string | null;
        
}
