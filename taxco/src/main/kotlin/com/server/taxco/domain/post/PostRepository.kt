package com.server.taxco.domain.post

import com.server.taxco.resources.database.PostDocument
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable

// TODO: Pensar em alguma solução melhor para fazer isso aqui sem importar o pageable direto no domain

/** responsible for make the contract of post database operations */
interface PostRepository {
    /**
     * search for a specific Post domain object
     * @param postId the post id that's going to be looking for
     **/
    fun findById(postId: PostId): Post?
    /**
     *save a Post object into the database
     * @param post the post object that's going to be saved
     **/
    fun save(post: Post)
    /**
     * fetch all the posts per page
     * @param pageable the object to decide the size and which page return
     **/
    fun findAll(pageable: Pageable): Page<PostDocument>
    /**
     * find a post by post title
     * @param name name of the post that's going to be search
     **/
    fun findByTitle(name : String) : Post?
}
