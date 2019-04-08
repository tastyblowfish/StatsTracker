import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("Users",{schema:"public" } )
export class Users {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:500,
        name:"name"
        })
    name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"username"
        })
    username:string;
        

    @Column("text",{ 
        nullable:false,
        name:"password"
        })
    password:string;
        

    @Column("text",{ 
        nullable:false,
        name:"email"
        })
    email:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"type"
        })
    type:number;
        

    @Column("boolean",{ 
        nullable:false,
        name:"active"
        })
    active:boolean;
        
}
