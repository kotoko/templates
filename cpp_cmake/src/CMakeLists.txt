cmake_minimum_required(VERSION 3.8)

project(project_hello)

set(CMAKE_CXX_STANDARD 17)

add_compile_options(
        "-Wall"
        "-Wextra"
        "-Wcast-align"
        "-Wswitch-default"
        "-Wredundant-decls"
        "-flto"
        "$<$<CONFIG:DEBUG>:-Wpadded>"
        "$<$<CONFIG:DEBUG>:-g>"
        "$<$<CONFIG:DEBUG>:-O0>"
        "$<$<CONFIG:RELEASE>:-DNDEBUG>"
        "$<$<CONFIG:RELEASE>:-Werror>"
        "$<$<CONFIG:RELEASE>:-fno-asynchronous-unwind-tables>"
        "$<$<CONFIG:RELEASE>:-O2>"
)

find_package(Boost REQUIRED COMPONENTS program_options)
include_directories(${Boost_INCLUDE_DIRS})


add_executable(binary_hello_world
        main.cpp
        utility.hpp
        utility.cpp
)
target_link_libraries(binary_hello_world ${Boost_LIBRARIES})
