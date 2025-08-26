import React from 'react'

interface Story {
  id: number
  title: string
  image: string
  duration: string
}

interface StoryCardProps {
  story: Story
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="flex-shrink-0 w-32 bg-white rounded-2xl shadow-soft overflow-hidden">
      <div className="relative">
        <img 
          src={story.image} 
          alt={story.title}
          className="w-full h-24 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          {story.duration}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {story.title}
        </h3>
      </div>
    </div>
  )
}

export default StoryCard 