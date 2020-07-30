class Song < ApplicationRecord
    has_many :songlists
    has_many :users, through: :songlists
end
