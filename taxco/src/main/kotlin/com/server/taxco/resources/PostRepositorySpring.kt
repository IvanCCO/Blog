package com.server.taxco.resources

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface PostRepositorySpring : MongoRepository<PostDocument, String>