# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique.add_index|
|email|text|null: false,unique|
|password|string|null: false|

### Association
- has_many :members
- has_many :massages
- has_many :groups, through: :members



## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|add_index|
|image|string|add_index|
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|


### Association
- belongs_to :user
- belongs_to :user



## groupsテーブル


|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :members
- has_many :massages
- has_many :users, through: :members



## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
