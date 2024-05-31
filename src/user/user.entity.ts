import { Entity, Column, PrimaryGeneratedColumn,OneToMany} from 'typeorm';
import { Image } from '../image/image.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  images:string

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
}