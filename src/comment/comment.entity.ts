// src/comment/comment.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Image } from '../image/image.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Image, image => image.comments)
  image: Image;
}
