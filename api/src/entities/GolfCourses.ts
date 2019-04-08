import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("GolfCourses",{schema:"public" } )
export class GolfCourses {

    @Column("text",{ 
        nullable:false,
        primary:true,
        name:"course_id"
        })
    course_id:string;
        

    @Column("text",{ 
        nullable:true,
        name:"facility_id"
        })
    facility_id:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"course_name"
        })
    course_name:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"holes"
        })
    holes:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"par"
        })
    par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"course_type"
        })
    course_type:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"course_architect"
        })
    course_architect:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"open_date"
        })
    open_date:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"guest_policy"
        })
    guest_policy:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"weekday_price"
        })
    weekday_price:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"weekend_price"
        })
    weekend_price:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"twilight_price"
        })
    twilight_price:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"fairway"
        })
    fairway:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"green"
        })
    green:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"currency"
        })
    currency:string | null;
        
}
