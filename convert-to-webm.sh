#!/bin/bash

# Video Conversion Script: MP4 to WebM
# This script converts all MP4 files to WebM format for better web optimization

echo "🎬 Starting MP4 to WebM conversion..."
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   brew install ffmpeg"
    exit 1
fi

# Array to store source MP4 files (excluding dist folder)
mp4_files=(
    "public/videos/Background.mp4"
    "src/assets/images/3DMax/videoBg.mp4"
    "src/assets/images/blockchain/Blockchain.mp4"
    "src/assets/images/solidworks/Video_Solidworks.mp4"
)

# Track statistics
total_original_size=0
total_optimized_size=0
converted_count=0

echo "📊 Converting ${#mp4_files[@]} video files..."
echo ""

# Convert each MP4 file to WebM
for mp4_file in "${mp4_files[@]}"; do
    if [ ! -f "$mp4_file" ]; then
        echo "⚠️  Skipping $mp4_file (file not found)"
        continue
    fi
    
    # Get file size before conversion
    original_size=$(stat -f%z "$mp4_file" 2>/dev/null || stat -c%s "$mp4_file" 2>/dev/null)
    original_size_mb=$(echo "scale=2; $original_size / 1048576" | bc)
    
    # Generate output filename
    webm_file="${mp4_file%.mp4}.webm"
    
    echo "🔄 Converting: $mp4_file"
    echo "   Original size: ${original_size_mb} MB"
    
    # Convert to WebM with optimized settings
    # -c:v libvpx-vp9: Use VP9 codec (better compression than VP8)
    # -crf 30: Quality level (0-63, lower = better quality, 30 is good balance)
    # -b:v 0: Allow variable bitrate
    # -c:a libopus: Use Opus audio codec (better than Vorbis)
    ffmpeg -i "$mp4_file" \
        -c:v libvpx-vp9 \
        -crf 30 \
        -b:v 0 \
        -c:a libopus \
        -b:a 128k \
        -y \
        "$webm_file" \
        -loglevel error -stats
    
    if [ $? -eq 0 ]; then
        # Get file size after conversion
        optimized_size=$(stat -f%z "$webm_file" 2>/dev/null || stat -c%s "$webm_file" 2>/dev/null)
        optimized_size_mb=$(echo "scale=2; $optimized_size / 1048576" | bc)
        
        # Calculate savings
        savings=$(echo "scale=2; (($original_size - $optimized_size) / $original_size) * 100" | bc)
        
        echo "   ✅ Converted to: $webm_file"
        echo "   New size: ${optimized_size_mb} MB (${savings}% smaller)"
        echo ""
        
        # Update statistics
        total_original_size=$((total_original_size + original_size))
        total_optimized_size=$((total_optimized_size + optimized_size))
        converted_count=$((converted_count + 1))
    else
        echo "   ❌ Failed to convert $mp4_file"
        echo ""
    fi
done

# Display summary
echo "================================"
echo "📈 Conversion Summary"
echo "================================"
echo "Files converted: $converted_count / ${#mp4_files[@]}"

if [ $converted_count -gt 0 ]; then
    total_original_mb=$(echo "scale=2; $total_original_size / 1048576" | bc)
    total_optimized_mb=$(echo "scale=2; $total_optimized_size / 1048576" | bc)
    total_savings=$(echo "scale=2; (($total_original_size - $total_optimized_size) / $total_original_size) * 100" | bc)
    
    echo "Total original size: ${total_original_mb} MB"
    echo "Total optimized size: ${total_optimized_mb} MB"
    echo "Total savings: ${total_savings}% 🎉"
    echo ""
    echo "✨ Next steps:"
    echo "   1. Review the generated .webm files"
    echo "   2. Update your code to use .webm instead of .mp4"
    echo "   3. Test on local dev server"
    echo "   4. (Optional) Remove original .mp4 files after verification"
fi
