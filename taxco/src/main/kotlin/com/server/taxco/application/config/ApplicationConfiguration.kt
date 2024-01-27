package com.server.taxco.application.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Configuration

@Configuration
@EnableConfigurationProperties(
    AwsProperties::class,
    BucketsProperties::class,
    ReadTimeProperties::class,
    SecurityProperties::class
)
class ApplicationConfiguration

@ConfigurationProperties(prefix = "aws")
data class AwsProperties(
    val endpoint: String? = null,
    val region: String,
    val accessKey: String,
    val accessKeySecret: String
)

@ConfigurationProperties(prefix = "aws.buckets")
data class BucketsProperties(
    val articleBucket: String
)

@ConfigurationProperties(prefix = "app.read-time.config")
data class ReadTimeProperties(
    val bytesByWord: Int,
    val wordsByMinute: Int
)

@ConfigurationProperties(prefix = "app.security")
data class SecurityProperties(
    val header: String,
    val authorization: String
)
