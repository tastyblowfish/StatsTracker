import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("GolfCourseTees",{schema:"public" } )
export class GolfCourseTees {

    @Column("text",{ 
        nullable:false,
        primary:true,
        name:"tee_id"
        })
    tee_id:string;
        

    @Column("text",{ 
        nullable:true,
        name:"course_id"
        })
    course_id:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"tee_name"
        })
    tee_name:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"tee_color"
        })
    tee_color:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"course_par_for_tee"
        })
    course_par_for_tee:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"rating"
        })
    rating:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"slope"
        })
    slope:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole1"
        })
    hole1:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole2"
        })
    hole2:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole3"
        })
    hole3:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole4"
        })
    hole4:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole5"
        })
    hole5:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole6"
        })
    hole6:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole7"
        })
    hole7:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole8"
        })
    hole8:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole9"
        })
    hole9:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole10"
        })
    hole10:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole11"
        })
    hole11:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole12"
        })
    hole12:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole13"
        })
    hole13:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole14"
        })
    hole14:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole15"
        })
    hole15:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole16"
        })
    hole16:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole17"
        })
    hole17:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole18"
        })
    hole18:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"total_distance"
        })
    total_distance:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole1_par"
        })
    hole1_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole2_par"
        })
    hole2_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole3_par"
        })
    hole3_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole4_par"
        })
    hole4_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole5_par"
        })
    hole5_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole6_par"
        })
    hole6_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole7_par"
        })
    hole7_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole8_par"
        })
    hole8_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole9_par"
        })
    hole9_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole10_par"
        })
    hole10_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole11_par"
        })
    hole11_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole12_par"
        })
    hole12_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole13_par"
        })
    hole13_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole14_par"
        })
    hole14_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole15_par"
        })
    hole15_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole16_par"
        })
    hole16_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole17_par"
        })
    hole17_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole18_par"
        })
    hole18_par:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole1_handicap"
        })
    hole1_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole2_handicap"
        })
    hole2_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole3_handicap"
        })
    hole3_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole4_handicap"
        })
    hole4_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole5_handicap"
        })
    hole5_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole6_handicap"
        })
    hole6_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole7_handicap"
        })
    hole7_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole8_handicap"
        })
    hole8_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole9_handicap"
        })
    hole9_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole10_handicap"
        })
    hole10_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole11_handicap"
        })
    hole11_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole12_handicap"
        })
    hole12_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole13_handicap"
        })
    hole13_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole14_handicap"
        })
    hole14_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole15_handicap"
        })
    hole15_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole16_handicap"
        })
    hole16_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole17_handicap"
        })
    hole17_handicap:string | null;
        

    @Column("text",{ 
        nullable:true,
        name:"hole18_handicap"
        })
    hole18_handicap:string | null;
        
}
