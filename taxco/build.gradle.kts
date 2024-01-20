import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.2.1"
    id("io.spring.dependency-management") version "1.1.4"
    kotlin("jvm") version "1.9.21"
    kotlin("plugin.spring") version "1.9.21"
    id("org.jlleitschuh.gradle.ktlint") version "10.2.1"
}

group = "com.server"
version = "0.0.1-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-data-mongodb")
// 	implementation("org.springframework.boot:spring-boot-starter-security")
// 	implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
// 	testImplementation("org.springframework.security:spring-security-test")

    // ULID Generator
    implementation("com.github.f4b6a3:ulid-creator:5.2.3")

    // Cloud Provider & Services
    implementation(platform("software.amazon.awssdk:bom:2.23.3"))
    implementation("software.amazon.awssdk:s3")

    // Logging
    compileOnly("org.projectlombok:lombok:1.18.30")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs += "-Xjsr305=strict"
        jvmTarget = "17"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
