import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ) { }

    /* create a new post */ 
    createPost(feedPost: FeedPost): Observable<FeedPostEntity> {
        return from(this.feedPostRepository.save(feedPost));
    }

    /* find all posts */ 
    findAllPosts(): Observable<FeedPost[]>{
        return from(this.feedPostRepository.find())
    }

    /* update post */ 
    updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult>{
        return from(this.feedPostRepository.update(id, feedPost));
    }

    /* delete post */
    deletePost(id: number): Observable<DeleteResult>{
        return from(this.feedPostRepository.delete(id));
    } 

}
