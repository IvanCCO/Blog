package com.server.taxco.application.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.context.properties.bind.ConstructorBinding
import org.springframework.context.annotation.Configuration


@Configuration
@EnableConfigurationProperties(
    AwsProperties::class,
    BucketsProperties::class
)
class ApplicationConfiguration

@ConfigurationProperties(prefix = "aws")
data class AwsProperties(
    val endpoint : String? = null,
    val region : String
)

@ConfigurationProperties(prefix = "aws.buckets")
data class BucketsProperties(
    val postBucket : String
)

