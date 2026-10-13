import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Fungsi untuk menentukan warna border berdasarkan mood
const getBorderColor = (moodType) => {
  switch (moodType) {
    case 'happy': return '#34d399'; // hijau
    case 'focus': return '#60a5fa'; // biru muda
    case 'calm': return '#a78bfa';  // ungu
    case 'sad': return '#94a3b8';   // abu-abu
    case 'excited': return '#f472b6'; // pink
    default: return '#e5e7eb';      // abu-abu terang bawaan
  }
};

export default function DiaryCard({ title, date, preview, moodUri, moodSource, moodType }) {
  // Pilih sumber gambar: pakai gambar lokal (moodSource) kalau ada, kalau nggak pakai URL (moodUri)
  const imageSource = moodSource ? moodSource : { uri: moodUri };

  return (
    <View style={[styles.card, { borderColor: getBorderColor(moodType) }]}>
      <Image source={imageSource} style={styles.mood} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', gap: 12, padding: 12, borderWidth: 2, borderRadius: 12, marginBottom: 12 },
  mood: { width: 64, height: 64, borderRadius: 32 },
  content: { flex: 1 },
  title: { fontSize: 16, fontWeight: '700' },
  date: { fontSize: 12, color: '#6b7280', marginBottom: 6 },
  preview: { fontSize: 14 },
});