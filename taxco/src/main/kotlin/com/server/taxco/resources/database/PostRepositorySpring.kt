package com.server.taxco.resources.database

import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface PostRepositorySpring :
    MongoRepository<PostDocument, String>,
    PagingAndSortingRepository<PostDocument, String> {
    override fun findAll(pageable: Pageable): Page<PostDocument>
}
