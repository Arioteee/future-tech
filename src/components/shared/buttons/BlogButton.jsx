import { useState } from 'react'

import { LikeIcon, CommentIcon, ShareIcon } from '@/components/icons/Icons'

export const BlogButton = ({ nameBtn }) => {
	const [isLiked, setIsLiked] = useState(false)
	let [likesCount, setLikesCount] = useState(0)
	let activetiesCount = '0'

	const formatLikes = count => {
		if (count >= 1000) {
			const formatted = Math.floor((count / 1000) * 10) / 10
			return formatted % 1 === 0 ? formatted + 'k' : formatted.toFixed(1) + 'k'
		}
		return count.toString()
	}

	const onToggleLikeButton = () => {
		if (isLiked) {
			setIsLiked(false)
			setLikesCount(likesCount - 1)
		} else {
			setIsLiked(true)
			setLikesCount(likesCount + 1)
		}
	}

	let currentIconBtn
	if (nameBtn) {
		if (nameBtn === 'like') {
			currentIconBtn = (
				<LikeIcon fill={isLiked ? '#f50' : 'none'} stroke={isLiked ? '#f50' : '#666666'} />
			)
		} else if (nameBtn === 'comment') {
			currentIconBtn = <CommentIcon />
		} else if (nameBtn === 'share') {
			currentIconBtn = <ShareIcon />
		}
	} else {
		console.error()
	}

	return (
		<button
			className='flex items-center gap-0.5 px-3 py-1.5 bg-dark-10 border border-dark-15 rounded-[100px]'
			type='button'
			onClick={nameBtn === 'like' ? onToggleLikeButton : undefined}
		>
			{currentIconBtn}
			<span className='font-family-second text-sm text-light-60'>
				{nameBtn === 'like' ? formatLikes(likesCount) : activetiesCount}
			</span>
		</button>
	)
}
